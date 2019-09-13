function toggleMenu(){
    let element = document.querySelector(".book-menu");
    element.classList.toggle("show");
    // element = document.querySelector(".fade-layer");
    element.classList.toggle("hidden");
}

let element = document.querySelector("#browse");
element.addEventListener("click", toggleMenu)
// element = document.querySelector(".shop-container");
// element.addEventListener("click", toggleMenu)



document.querySelectorAll(".book-menu a").forEach(element => element.addEventListener("click", _ => document.querySelector(".book-menu").classList.remove("show")));