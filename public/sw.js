if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/398-173662f0581cdcad.js",revision:"173662f0581cdcad"},{url:"/_next/static/chunks/922-1b9fd5331a88b7c3.js",revision:"1b9fd5331a88b7c3"},{url:"/_next/static/chunks/a198fdd9-8a8deaf9691032cb.js",revision:"8a8deaf9691032cb"},{url:"/_next/static/chunks/cb1608f2-a1d0df99b3185d75.js",revision:"a1d0df99b3185d75"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-57b8f06228456f21.js",revision:"57b8f06228456f21"},{url:"/_next/static/chunks/pages/_app-4fdeb50a396eb2ce.js",revision:"4fdeb50a396eb2ce"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/general-progress-430ae0ecb9af9c12.js",revision:"430ae0ecb9af9c12"},{url:"/_next/static/chunks/pages/index-47fe8ae164fcf403.js",revision:"47fe8ae164fcf403"},{url:"/_next/static/chunks/pages/isolated-tasks-cf5b0eb25891dc65.js",revision:"cf5b0eb25891dc65"},{url:"/_next/static/chunks/pages/list-tasks-ad9d75957ad035a7.js",revision:"ad9d75957ad035a7"},{url:"/_next/static/chunks/pages/login-65756d6a347e0acf.js",revision:"65756d6a347e0acf"},{url:"/_next/static/chunks/pages/register-00a3e9797ea70bbf.js",revision:"00a3e9797ea70bbf"},{url:"/_next/static/chunks/pages/share-6aeed9957abf896b.js",revision:"6aeed9957abf896b"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"9b312e20a4e32339"},{url:"/_next/static/css/282b844374f3891c.css",revision:"282b844374f3891c"},{url:"/_next/static/css/42f55e3ad44141e7.css",revision:"42f55e3ad44141e7"},{url:"/_next/static/css/81e700c97cad5834.css",revision:"81e700c97cad5834"},{url:"/_next/static/css/b8996ac51b263dc9.css",revision:"b8996ac51b263dc9"},{url:"/_next/static/css/cdafdef25b2b3086.css",revision:"cdafdef25b2b3086"},{url:"/_next/static/css/f23d5f8de8f3b744.css",revision:"f23d5f8de8f3b744"},{url:"/_next/static/css/f32389e671966b90.css",revision:"f32389e671966b90"},{url:"/_next/static/ugW7xhqOD93nB3GJ_Zw6O/_buildManifest.js",revision:"82ab4f322afbfa24eb2966938b59d4f4"},{url:"/_next/static/ugW7xhqOD93nB3GJ_Zw6O/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/ugW7xhqOD93nB3GJ_Zw6O/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icon-192x192.png",revision:"93fc04cdd204da54193091feef9e3041"},{url:"/icon-256x256.png",revision:"3e4caecf69548ac61d33565a33048e66"},{url:"/icon-384x384.png",revision:"cd440bd6007f76fe5fe94d65a5b1bada"},{url:"/icon-512x512.png",revision:"8a665a150affd97222d690690ac891fc"},{url:"/manifest.json",revision:"1f116ac069ec0e589e3e9479e4fee694"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));