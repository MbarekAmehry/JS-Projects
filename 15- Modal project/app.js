const btn = document.querySelector(".btn");
const close = document.querySelector(".fa-times-circle");
const overlayModel = document.querySelector(".overlay-model");

btn.addEventListener("click", () => {
  overlayModel.classList.toggle("hide-overlay");
});

close.addEventListener("click", () => {
  overlayModel.classList.toggle("hide-overlay");
});
