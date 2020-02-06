function openNav() {
    document.querySelector("#show-nav").setAttribute(
        "style", 
        "opacity: 0; left: -250px; top: -250px; visibility: hidden;");
    document.querySelector("#hide-nav").setAttribute(
        "style", 
        "opacity: 100%; left: 0; top: 0; visibility: visible;");
}

function closeNav() {
    document.querySelector("#hide-nav").setAttribute(
        "style", 
        "opacity: 0; left: -250px; top: -250px; visibility: hidden;");
    document.querySelector("#show-nav").setAttribute(
        "style", 
        "opacity: 100%; left: 0; top: 0; visibility: visible;");
} 

/* Slide in Info Arrow after 2.5 seconds */

const arrow = document.querySelector(".fa-long-arrow-alt-left");

setTimeout(() => {
    arrow.classList.add('animation-target');
    arrow.style.visibility = "visible";
}, 2500);

/* After another 2.5 seconds fade out (duration 2.5 seconds) */
/* TODO */
setTimeout(() => {
    arrow.style.visibility = "visible";
}, 2500);