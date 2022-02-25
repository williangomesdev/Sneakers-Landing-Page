//Ativer menu
let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");
let body = document.querySelector("body");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
  body.classList.toggle("active");
};

Window.onscroll = () => {
  if (window.innerWidth < 1200) {
    menu.classList.remove("fa-times");
    header.classList.remove("active");
    body.classList.remove("active");
  }
};
