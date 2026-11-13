/* Fixframe service worker: keeps the app available offline and installs updates only when asked. It never contacts other sites. */
const VERSION = '1.5.4';
const CACHE = `fixframe-${VERSION}`;
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './sample.mp4',
  './step-bg.jpg',
  './fx-font-regular.ttf',
  './fx-font-bold.ttf',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './favicon-64.png',
];

/* Browsers look at sw.js by themselves from time to time. Such a check must not download or install anything:
   a new version installs only on the first visit, or when the app asked for it ("Check for updates" in Settings
   writes a short-lived flag). Versions before 1.5.2 cannot write the flag, so updates from them are let through. */
const older = (a, b) => {
  const x = a.split('.').map(Number);
  const y = b.split('.').map(Number);
  for (let i = 0; i < 3; i++) { if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) < (y[i] || 0); }
  return false;
};
async function installAllowed() {
  const keys = (await caches.keys()).filter((k) => /^fixframe-\d/.test(k) && k !== CACHE);
  if (!keys.length) return true;
  if (keys.some((k) => older(k.slice(9), '1.5.2'))) return true;
  try {
    const flags = await caches.open('fixframe-flags');
    const r = await flags.match('./update-ok');
    if (r) {
      const at = +(await r.text());
      await flags.delete('./update-ok');
      if (Date.now() - at < 10 * 60000) return true;
    }
  } catch (e) { /* no flag */ }
  return false;
}
self.addEventListener('install', (event) => {
  // No skipWaiting(): a new version waits until the user taps "Install update".
  event.waitUntil((async () => {
    if (!(await installAllowed())) throw new Error('Update not requested');
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS.map((u) => new Request(u, { cache: 'reload' })));
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith('fixframe-') && k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  const msg = event.data || {};
  if (msg.type === 'SKIP_WAITING') self.skipWaiting();
  if (msg.type === 'GET_VERSION' && event.ports && event.ports[0]) event.ports[0].postMessage({ version: VERSION });
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    event.respondWith(caches.match('./index.html', { ignoreSearch: true }).then((r) => r || fetch(req)));
    return;
  }
  event.respondWith(caches.match(req, { ignoreSearch: true }).then((r) => r || fetch(req)));
});
