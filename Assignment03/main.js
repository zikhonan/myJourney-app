<<<<<<< HEAD
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(reg => {
        console.log('Registration successful', reg);
      })
        .catch(e => console.error('Error during service worker registration:', e));
    } else {
      console.warn('Service Worker is not supported');
    }
  }
  
  const load = (event) => {  
    console.log('loaded')
    registerServiceWorker()
  }
  
  window.addEventListener('load', load)
=======
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
      console.log('Successfully registered service worker',reg);      
    }).catch(function(err) {
      console.warn('Error whilst registering service worker',err);
    });
};

window.addEventListener('online', function(e) {
  // Resync data with server.
  console.log("You are online");
  Page.hideOfflineWarning();
  Arrivals.loadData();
}, false);

window.addEventListener('offline', function(e) {
  // Queue up events for server.
  console.log("You are offline");
  Page.showOfflineWarning();
}, false);

// Check if the user is connected.
if (navigator.onLine) {
  Arrivals.loadData();
} else {
  // Show offline message
  Page.showOfflineWarning();
}

// Set Knockout view model bindings.
ko.applyBindings(Page.vm);
  
>>>>>>> 4396b3912e290a3285d426828bf4df6d46aa2867
