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

/* Slide in Info Arrow after 2 seconds */

const arrow = document.querySelector(".fa-long-arrow-alt-left");

setTimeout(() => {
    arrow.classList.add('animation-target');
    arrow.style.visibility = "visible";

    /* After another 2 seconds fade out (duration 2 seconds) */
    /* TODO */
    setTimeout(() => {
        arrow.style.display = "none";
    }, 2000);
}, 2000);