// Nombre del caché de la aplicación
const CACHE_NAME = 'Despliegue de mDApp';

// Archivos que se van a utilizar en caché
const urlsToCache = [
    '/',
    '../html/index.html',
    '../styles/index.css',
    '../js/index.js',
];

// Evento de instalación del Service Worker
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log("Cache abierta");
            })
    )
})

// 
self.addEventListener("activate", function (event) {
    event.waitUntil(
        cache.keys().then(function (cacheNames) {
            return Promise.all(cacheNames.filter(function (cacheName) {
                return cacheName !== CACHE_NAME;
            }).map(function (cacheName) {
                return caches.delete(cacheName);
            })
            );
        }
        ));
});

// Evento fetch para interceptar solicitudes al servidor para buscarlas primero en caché
self.addEventListener('fetch', function (event) {
    event.respondWith(
        cache.match(event.request)
        .then(function (response) {
            if(response) {
                return response;
            }
            return fetch(event.request); 
        })
    );
})