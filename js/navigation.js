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