'use strict';

document.body.style.overflow = "hidden";

let preloader = document.getElementById('preloadstart');

////////////////// прелоадер //////////////////
let timerId = setTimeout(function() {
    preloader.style.display = 'none';
    document.body.style.overflow = "auto";
}, 2000); 
////////////////// прелоадер //////////////////