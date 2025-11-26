/* ===============================
   FULL OFFLINE PWA MODE ENABLED 🚀
   Works even after app is closed!
   =============================== */

const CACHE_NAME = "offline-app-cache-v2";

const FILES_TO_CACHE = [
  "/",             // Homepage
  "/offline",      // Offline page
  "/test-page",    // Test page
  "/icon-192.png",
  "/icon-512.png",
];

/* ---------- INSTALL: Save files to cache ---------- */
self.addEventListener("install", (event) => {
  console.log("Installing Service Worker & caching files...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

/* ---------- ACTIVE: Remove old cache versions ---------- */
self.addEventListener("activate", (event) => {
  console.log("Activating new cache...");
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => key !== CACHE_NAME && caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

/* ---------- FETCH: Load from cache first ---------- */
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      
      // If cached → return instantly (OFFLINE WORKS)
      if (cachedResponse) return cachedResponse;

      // If not cached, try internet & save it for later
      return fetch(event.request)
        .then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone()); // save new file
            return networkResponse;
          });
        })
        .catch(() => caches.match("/offline")); // fallback if network fails
    })
  );
});
