const CACHE_NAME = "card-game-pwa-v2";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./main.html",
  "./indianpoker_js.html",
  "./indian_blackjack_js.html",
  "./blackjack_js.html",
  "./rules/indian-poker.md",
  "./rules/blackjack.md",
  "./rules/indian-blackjack.md",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
