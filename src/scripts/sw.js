import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// List asset will be cache
const assetsToCache = [
  './',
  './icons/icon-16x16.png',
  './icons/icon-32x32.png',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  './icons/apple-touch-icon.png',
  './icons/maskable-icon-512x512.png',
  './images/hero-large.jpg',
  './images/hero-large.webp',
  './images/hero-small.jpg',
  './images/hero-small.webp',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
