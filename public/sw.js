if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-8232f3e4"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/9PWDeVPBdjFwnFJczos_O/_buildManifest.js",revision:"56313a2fa41efe17a9286c47ac6aacba"},{url:"/_next/static/9PWDeVPBdjFwnFJczos_O/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/4bd1b696-5a5a3e97935022e6.js",revision:"9PWDeVPBdjFwnFJczos_O"},{url:"/_next/static/chunks/684-a138d8070b247569.js",revision:"9PWDeVPBdjFwnFJczos_O"},{url:"/_next/static/chunks/741-db6cc669daeebd3a.js",revision:"9PWDeVPBdjFwnFJczos_O"},{url:"/_next/static/chunks/app/_not-found/page-1b09f6ef81a754c6.js",revision:"9PWDeVPBdjFwnFJczos_O"},{url:"/_next/static/chunks/app/layout-f36867bae0373421.js",revision:"9PWDeVPBdjFwnFJczos_O"},{url:"/_next/static/chunks/app/page-4bfd8d840752f589.js",revision:"9PWDeVPBdjFwnFJczos_O"},{url:"/_next/static/chunks/framework-be704551803917a8.js",revision:"9PWDeVPBdjFwnFJczos_O"},{url:"/_next/static/chunks/main-56bbdb45f08ad497.js",revision:"9PWDeVPBdjFwnFJczos_O"},{url:"/_next/static/chunks/main-app-9a8285ab7613d71a.js",revision:"9PWDeVPBdjFwnFJczos_O"},{url:"/_next/static/chunks/pages/_app-da15c11dea942c36.js",revision:"9PWDeVPBdjFwnFJczos_O"},{url:"/_next/static/chunks/pages/_error-cc3f077a18ea1793.js",revision:"9PWDeVPBdjFwnFJczos_O"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-db0a529a99835594.js",revision:"9PWDeVPBdjFwnFJczos_O"},{url:"/_next/static/css/7e86e96ab838453f.css",revision:"7e86e96ab838453f"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icons/icon-192x192.png",revision:"2949a52894875f42e1823dd9ac398094"},{url:"/icons/icon-512x512.png",revision:"b1c845f773e194dea1f39cb385acdd3f"},{url:"/manifest.json",revision:"6b32f3649b5b3b36f888f7ff18ff800e"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/sounds/correct.mp3",revision:"8ddaa0402388696e15043167e4a6ae18"},{url:"/sounds/ding.mp3",revision:"bc9adfdc3fee2521ae60d2df94b211a6"},{url:"/sounds/start.mp3",revision:"387e7a9e5dfaf22381e02607a2e0ef8f"},{url:"/sounds/stop.mp3",revision:"1ed29636231464bcd45d97c3f3678e59"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https?.*/,new e.NetworkFirst({cacheName:"offline-cache",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:200,maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/\/$/,new e.NetworkFirst({cacheName:"html-cache",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/\/_next\/static\/.*/i,new e.CacheFirst({cacheName:"static-resources",plugins:[new e.ExpirationPlugin({maxEntries:200,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+/i,new e.CacheFirst({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/\.(?:mp3)$/i,new e.CacheFirst({cacheName:"audio",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|webp)$/i,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
