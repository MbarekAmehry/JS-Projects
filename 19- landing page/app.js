// showing different xars' models
const btns = document.querySelectorAll(".btn");
const model = document.querySelector(".myImg");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const targetBtn = e.target.dataset.color;
    model.src = `images/${targetBtn}.webp`;
  });
});

// show nabar on Mobile
const bars = document.querySelector(".bars");
const menu = document.querySelector(".menu");
bars.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

// fixed Navbar on scroll
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (header.clientHeight < window.pageYOffset) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

console.log(header.clientHeight);
