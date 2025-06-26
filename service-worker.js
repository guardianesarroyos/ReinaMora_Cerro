const CACHE_NAME = 'monitor-meteo-reinamora';
const urlsToCache = [
  '/',
  '/index.html',
  '/reinamora_dia.png',
  '/reinamora_noche.png',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
  // Agrega aquí otros recursos necesarios
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key =>
          (key !== CACHE_NAME) ? caches.delete(key) : null
        )
      )
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});