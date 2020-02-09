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

/* Slide in Info Arrow and show message */

const arrow = document.querySelector(".fa-long-arrow-alt-left");
const arrowMessage = document.querySelector(".arrow-message");

setTimeout(() => {
    arrow.classList.add('animation-target');
    arrow.style.visibility = "visible";
    arrowMessage.style.visibility = "visible";
    arrowMessage.style.opacity = "100%";
    setTimeout(() => {
        arrow.style.opacity = "0";
        arrowMessage.style.opacity = "0";
        arrow.style.visibility = "hidden";
        arrowMessage.style.visibility = "hidden";
    }, 6000);
}, 2000);