// CME & Budget Tracker Service Worker
const CACHE_NAME = 'cme-tracker-v2';
const CACHE_URLS = [
    '/cme-tracker/',
    '/assets/css/style.css',
    '/android-chrome-192x192.png',
    '/android-chrome-512x512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(CACHE_URLS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name.startsWith('cme-tracker-') && name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;

    event.respondWith((async () => {
        const cache = await caches.open(CACHE_NAME);
        try {
            const response = await fetch(event.request);
            if (response.status === 200) {
                event.waitUntil(cache.put(event.request, response.clone()).catch(() => {}));
            }
            return response;
        } catch (error) {
            const cachedResponse = await cache.match(event.request);
            if (cachedResponse) return cachedResponse;
            if (event.request.mode === 'navigate') {
                const app = await cache.match(CACHE_URLS[0]);
                if (app) return app;
            }
            return new Response('Offline', { status: 503 });
        }
    })());
});
