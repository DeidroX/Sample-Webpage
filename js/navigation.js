function openNav() {
    document.querySelector("#show-nav").style.opacity = "0";
    document.querySelector("#show-nav").style.left = "-250px";
    document.querySelector("#show-nav").style.top = "-250px";
    document.querySelector("#show-nav").style.visibility = "hidden";
    document.querySelector("#hide-nav").style.visibility = "visible";
    document.querySelector("#hide-nav").style.opacity = "100%";
    document.querySelector("#hide-nav").style.left = "0";
    document.querySelector("#hide-nav").style.top = "0";
}

function closeNav() {
    document.querySelector("#hide-nav").style.opacity = "0";
    document.querySelector("#hide-nav").style.left = "-250px";
    document.querySelector("#hide-nav").style.top = "-250px";
    document.querySelector("#hide-nav").style.visibility = "hidden";
    document.querySelector("#show-nav").style.visibility = "visible";
    document.querySelector("#show-nav").style.opacity = "100%";
    document.querySelector("#show-nav").style.left = "0";
    document.querySelector("#show-nav").style.top = "0";
} 