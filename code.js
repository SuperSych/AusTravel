'use strict';

document.body.style.overflow = "hidden";
let a = document.documentElement.scrollHeight;

let preloader = document.getElementById('preloadstart');
let button_up = document.querySelector(".button_up");
let button_down = document.querySelector(".button_down");

let geo = document.querySelector(".iakor_Geo");
let to_geo = document.querySelector(".section_3");
let map = document.querySelector(".iakor_Map");
let to_map = document.getElementById("Map");
let pri = document.querySelector(".iakor_Pri");
let to_pri = document.querySelector(".ulli");


////////////////// скролл наверх //////////////////
button_up.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });   
})

window.addEventListener("scroll", function() {
    let b = document.documentElement.scrollTop;
    if (b * 100 / a > 20){
        button_up.style.opacity = 1;
    } else {
        button_up.style.opacity = 0;
    }
})
////////////////// скролл наверх //////////////////


//////////////////  скролл вниз  //////////////////
button_down.addEventListener("click", function() {
    window.scrollBy({
        top: 850,
        left: 0,
        behavior: "smooth"
    });
})
//////////////////  скролл вниз  //////////////////


//////////////////     якоря     //////////////////
geo.addEventListener("click", function() {
    to_geo.scrollIntoView({
        behavior: "smooth"
    })
})

map.addEventListener("click", function() {
    to_map.scrollIntoView({
        behavior: "smooth"
    })
})

pri.addEventListener("click", function() {
    to_pri.scrollIntoView({
        behavior: "smooth"
    })
})
//////////////////     якоря     //////////////////


////////////////// прелоадер //////////////////
let timerId = setTimeout(function() {
    preloader.style.display = 'none';
    document.body.style.overflow = "auto";
}, 2000); 
////////////////// прелоадер //////////////////