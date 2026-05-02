const CACHE_NAME = "dk-badminton-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/admin.html",
  "/manager.html",
  "/leaderboard.html",
  "/firebase-init.js",
  "/Dklogo.jpeg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});