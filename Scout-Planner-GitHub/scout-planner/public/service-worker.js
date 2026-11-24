const CACHE_NAME = 'scout-planner-v4';
const BASE = new URL('./', self.registration.scope);
const APP_SHELL = ['', 'index.html', 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png'].map(path => new URL(path, BASE).toString());
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))); self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('scout-planner-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', event => {
 if (event.request.method !== 'GET') return;
 const url = new URL(event.request.url); if (url.origin !== self.location.origin) return;
 if (event.request.mode === 'navigate') { event.respondWith(fetch(event.request).then(response => { if(response.ok) caches.open(CACHE_NAME).then(cache => cache.put(new URL('index.html', BASE), response.clone())); return response; }).catch(async () => (await caches.match(event.request)) || (await caches.match(new URL('index.html', BASE))) || (await caches.match(BASE)))); return; }
 event.respondWith(caches.match(event.request).then(cached => { const network = fetch(event.request).then(response => { if(response.ok && response.type === 'basic') caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone())); return response; }).catch(() => cached); return cached || network; }));
});
