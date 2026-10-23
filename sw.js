self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // 保持网络请求直通
  e.respondWith(fetch(e.request));
});