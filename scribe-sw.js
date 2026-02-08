// AI Scribe Studio Service Worker
// Provides offline caching for the AI Scribe Studio PWA

const CACHE_NAME = 'ai-scribe-studio-v1';
const CACHE_URLS = [
  '/ai-scribe-studio/',
  '/assets/css/style.css',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png'
];

// Install event - cache essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Scribe SW] Caching essential files');
        return cache.addAll(CACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('ai-scribe-studio-') && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - network first, fallback to cache
self.addEventListener('fetch', (event) => {
  // Only handle same-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Don't cache AI model files (they're handled by WebLLM's cache)
  if (event.request.url.includes('huggingface.co') || 
      event.request.url.includes('.wasm') ||
      event.request.url.includes('.bin')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone the response before caching
        const responseClone = response.clone();
        
        // Cache successful GET requests
        if (event.request.method === 'GET' && response.status === 200) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        
        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          // Return a basic offline page for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/ai-scribe-studio/');
          }
          
          return new Response('Offline', { status: 503 });
        });
      })
  );
});
