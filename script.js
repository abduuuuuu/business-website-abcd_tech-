window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
    ul.classList.remove("active-nav");
    icon.classList.remove("bx-x");
})
const ul = document.querySelector("ul");
const menu = document.querySelector(".menu");
const icon = document.querySelector(".menu i");
menu.addEventListener("click",function(){
    ul.classList.toggle("active-nav");
    icon.classList.toggle("bx-x");
    icon.classList.toggle("active-icon");
})
