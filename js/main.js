window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-50px";
  }
}
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});
let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
