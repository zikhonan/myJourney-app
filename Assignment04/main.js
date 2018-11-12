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

  //VUE-Framework
var app = new Vue({
  el: '#app',
  data:{

  },
  methods: {
      login: function(){
          window.location.href="landinpage.html";
          //loadMap();
      }
  }
})
