// VARIABLES
const bars = document.querySelector(".bars");
const close = document.querySelector(".close");
const aside = document.querySelector(".aside");

bars.addEventListener("click", () => {
  aside.classList.toggle("hide-aside");
});

close.addEventListener("click", () => {
  aside.classList.toggle("hide-aside");
});
