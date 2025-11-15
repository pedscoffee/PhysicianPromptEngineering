// Doc Pixel's Coffee - Service Worker
// Enables offline functionality with aggressive caching

const CACHE_VERSION = 'coffee-v1.1.0';
const STATIC_CACHE = `coffee-static-${CACHE_VERSION}`;
const MODEL_CACHE = `coffee-models-${CACHE_VERSION}`;
const RUNTIME_CACHE = `coffee-runtime-${CACHE_VERSION}`;

// Static assets to cache immediately on install
const STATIC_ASSETS = [
  '/scribe-pwa/',
  '/scribe-pwa/index.html',
  '/scribe-pwa/manifest.json',
  '/assets/css/style.css'
];

// Model URLs - cached on demand (large files)
const MODEL_DOMAINS = [
  'huggingface.co',
  'cdn.huggingface.co',
  'cdn.jsdelivr.net',
  'esm.run'
];

// Install event: Cache static assets
self.addEventListener('install', (event) => {
  console.log('[Coffee SW] Installing service worker...');

  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[Coffee SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[Coffee SW] Static assets cached successfully');
        return self.skipWaiting(); // Activate immediately
      })
      .catch((error) => {
        console.error('[Coffee SW] Failed to cache static assets:', error);
      })
  );
});

// Activate event: Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Coffee SW] Activating service worker...');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name.startsWith('coffee-'))
            .filter((name) =>
              name !== STATIC_CACHE &&
              name !== MODEL_CACHE &&
              name !== RUNTIME_CACHE
            )
            .map((name) => {
              console.log('[Coffee SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => {
        console.log('[Coffee SW] Service worker activated');
        return self.clients.claim(); // Take control immediately
      })
  );
});

// Fetch event: Serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // CRITICAL: Inject COOP/COEP headers for HTML documents to enable SharedArrayBuffer
  // This is required for ONNX WASM with SIMD support on GitHub Pages
  if (event.request.destination === 'document' ||
      event.request.mode === 'navigate' ||
      url.pathname.endsWith('.html') ||
      url.pathname === '/scribe-pwa/' ||
      url.pathname === '/scribe-pwa/index.html') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const newHeaders = new Headers(response.headers);
          newHeaders.set('Cross-Origin-Embedder-Policy', 'require-corp');
          newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');

          return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders
          });
        })
        .catch(error => {
          console.error('[Coffee SW] Failed to inject headers:', error);
          return fetch(event.request); // Fallback to original response
        })
    );
    return;
  }

  // Handle model files: Cache-first strategy (they're immutable)
  if (isModelRequest(url)) {
    event.respondWith(handleModelRequest(event.request));
    return;
  }

  // Handle static assets: Cache-first with network fallback
  if (isStaticAsset(url)) {
    event.respondWith(handleStaticRequest(event.request));
    return;
  }

  // Everything else: Network-first with cache fallback
  event.respondWith(handleRuntimeRequest(event.request));
});

// Check if request is for a model file
function isModelRequest(url) {
  return MODEL_DOMAINS.some(domain => url.hostname.includes(domain)) ||
         url.pathname.includes('.onnx') ||
         url.pathname.includes('.wasm') ||
         url.pathname.includes('transformers') ||
         url.pathname.includes('onnxruntime') ||
         url.pathname.includes('web-llm') ||
         url.pathname.includes('mlc-ai');
}

// Check if request is for a static asset
function isStaticAsset(url) {
  return STATIC_ASSETS.some(asset => url.pathname === asset) ||
         url.pathname.endsWith('.css') ||
         url.pathname.endsWith('.js') ||
         url.pathname.endsWith('.png') ||
         url.pathname.endsWith('.jpg') ||
         url.pathname.endsWith('.svg') ||
         url.pathname.endsWith('.woff2');
}

// Handle model requests: Cache-first (models are large and immutable)
async function handleModelRequest(request) {
  try {
    const cache = await caches.open(MODEL_CACHE);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      console.log('[Coffee SW] Serving model from cache:', request.url);
      return cachedResponse;
    }

    console.log('[Coffee SW] Downloading model:', request.url);
    const networkResponse = await fetch(request);

    // Clone response before caching (response can only be read once)
    const responseClone = networkResponse.clone();

    // Cache the model file (don't await - cache in background)
    cache.put(request, responseClone).catch((err) => {
      console.warn('[Coffee SW] Failed to cache model:', err);
    });

    return networkResponse;
  } catch (error) {
    console.error('[Coffee SW] Model request failed:', error);
    throw error;
  }
}

// Handle static requests: Cache-first with network fallback
async function handleStaticRequest(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    const responseClone = networkResponse.clone();

    cache.put(request, responseClone).catch((err) => {
      console.warn('[Coffee SW] Failed to cache static asset:', err);
    });

    return networkResponse;
  } catch (error) {
    console.error('[Coffee SW] Static request failed:', error);

    // Try to serve from cache as last resort
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    throw error;
  }
}

// Handle runtime requests: Network-first with cache fallback
async function handleRuntimeRequest(request) {
  try {
    const networkResponse = await fetch(request);

    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      const responseClone = networkResponse.clone();

      cache.put(request, responseClone).catch((err) => {
        console.warn('[Coffee SW] Failed to cache runtime request:', err);
      });
    }

    return networkResponse;
  } catch (error) {
    // Network failed, try cache
    const cache = await caches.open(RUNTIME_CACHE);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      console.log('[Coffee SW] Serving from cache (offline):', request.url);
      return cachedResponse;
    }

    console.error('[Coffee SW] Request failed and no cache available:', error);
    throw error;
  }
}

// Message handling (for future features like cache clearing)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name.startsWith('coffee-'))
            .map((name) => caches.delete(name))
        );
      })
    );
  }

  if (event.data && event.data.type === 'GET_CACHE_SIZE') {
    event.waitUntil(
      getCacheSize().then((size) => {
        event.ports[0].postMessage({ size });
      })
    );
  }
});

// Calculate total cache size
async function getCacheSize() {
  const cacheNames = await caches.keys();
  const coffeeCacheNames = cacheNames.filter(name => name.startsWith('coffee-'));

  let totalSize = 0;

  for (const cacheName of coffeeCacheNames) {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();

    for (const request of keys) {
      const response = await cache.match(request);
      if (response) {
        const blob = await response.blob();
        totalSize += blob.size;
      }
    }
  }

  return totalSize;
}

console.log('[Coffee SW] Service worker script loaded');
