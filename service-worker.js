const CACHE_NAME = 'tareas-cache-v2'; // Cambia el nombre del caché para invalidar el antiguo
const urlsToCache =[
    './',
    './index.html',
    './carpeta_css/estilo.css',
    './carpeta_java/lista.js',
    './imagen/iconoLista.png',
    './imagen/IconoPajaro.png',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache=>{
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response=>{
            return response || fetch(event.request);
        }).catch(error => {
            console.error('Fetch failed; returning offline page instead.', error);
            // Puedes devolver una página de error personalizada aquí
        })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
