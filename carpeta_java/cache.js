const CACHE_NAME = 'tareas-cache-v1';
const urlsToCache =[
    './',
    './copia_de_lista.html',
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
        caches.match(event.request).then(response=>{
            return response || fetch(event.request);
        })
    );
});