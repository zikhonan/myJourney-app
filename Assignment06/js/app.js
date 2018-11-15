"use strict";
console.log('Script has loaded.');
// Register service worker to control making site work offline

if('serviceWorker' in navigator) {
    console.log("In if statement");
    navigator.serviceWorker
        .register('js/sw.js')
        .then(() =>  console.log('Service Worker Registered') );
}

const app = new Vue({
    el: "#app",
    data: {
        username: "",
        password: "",
    },
    methods: {

    }
});