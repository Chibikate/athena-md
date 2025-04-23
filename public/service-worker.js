// public/service-worker.js
// TypeScript version would be service-worker.ts

const CACHE_NAME = 'athena-md-cache-v1';
const urlsToCache = [
    "/",                      
    "/app/aboutus",
    "/app/main_homepage",   
    "/app/contact_form", 
    "/course", 
    "/courses",
    "/course/[course]/data",
    "/pelviscourse",  
    "/pelviscourses",
    "/ultimaker",
    "/ultimakercourses",
    "/app/global.css",
    "/app/page.tsx",
    "/app/layout.tsx",
    "/app/navigator.tsx",
    "app/page.tsx",                 
    "/components/3dslicer_page",
    "/components/aboutus",
    "/components/course_overview",
    "/components/hero_page",
    "/components/main_home",           
    "/mandibular",
    "/pelvis",
    "/ultimaker",                    
    "/basic3D",
    "/course", 
    "/E1",
    "/E2", 
    "/E3", 
    "/E4",
    "/main",
    "/main_course",
    "/module1",
    "/module2",
    "/module3",
    "/module4",
    "/module5",
    "/module6",
    "/pelviscourse",
    "/ultimakercourse",
    "/public",
    "/athena-logo.svg",
    "/bgg6.png",
    "/bgg7.png",                               
    "/main.js",              
    "/images/logo.png",
    "/offline.html", // Fallback page for offline
  ];

// Install event - cache important assets
self.addEventListener('install', (event) => {
  // @ts-ignore - TypeScript might complain about the ExtendableEvent
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('Cache installation failed:', err);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  // @ts-ignore - TypeScript might complain about the ExtendableEvent
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // @ts-ignore - TypeScript might complain
  self.clients.claim();
});

// Fetch event - handle offline requests
self.addEventListener('fetch', (event) => {
  // @ts-ignore - TypeScript might complain about the FetchEvent
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then(response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Return the offline page for navigation requests when offline
            if (event.request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
          });
      })
  );
});