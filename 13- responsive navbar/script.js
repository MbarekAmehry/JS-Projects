// VARIABLES
const bars = document.querySelector(".bars");
const menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
  // if (menu.classList.contains("show-menu")) {
  //   menu.classList.remove("show-menu");
  // } else {
  //   menu.classList.add("show-menu");
  // }

  // Better way to do it
  menu.classList.toggle("show-menu");
});
