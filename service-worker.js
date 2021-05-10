if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }


self.addEventListener('install', async event=>{
    const cache = await caches.open('static-cache');
    cache.addAll(staticAssets);
});


// self.addEventListener('install', function(){
//     console.log('Install!');
// });

// self.addEventListener("activate", event => {
//     console.log('Activate');
// });

// self.addEventListener('fetch', function(event){
//     console.log('Fetch!', event.request);
// });