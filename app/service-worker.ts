const CACHE_NAME = "athenamd-cache-v1";
const urlsToCache = [
  "/",                      
  "/app/aboutus",
  "/app/main_homepage",   
  "/app/contact_form", 
  "/app/course", 
  "/app/courses",
  "/course/[course]/data",
  "/app/pelviscourse",  
  "/app/pelviscourses",
  "/app/ultimaker",
  "/app/ultimakercourses",
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
  "/basic3D/C1",
  "/basic3D/C2",
  "/basic3D/C3",
  "/basic3D/C4",
  "/basic3D/C5",
  "/basic3D/D1",
  "/course", 
  "/public/E1",
  "/public/E2", 
  "/public/E3", 
  "/public/E4",
  "/public/main",
  "/public/main_course",
  "/public/module1",
  "/public/module2",
  "/public/module3",
  "/public/module4",
  "/public/module5",
  "/public/module6",
  "/public/pelviscourse",
  "/public/ultimakercourse",
  "/public",
  "/athena-logo.svg",
  "/bgg6.png",
  "/bgg7.png", 
  "/bgg7.png",                                
  "/main.js",              
  "/explore.png",
  "/offline.html", // Fallback page for offline
];

self.addEventListener("install", (event: any) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event: any) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event: any) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => {
          return caches.match("/offline.html"); // Fallback if offline
        })
      );
    })
  );
});
