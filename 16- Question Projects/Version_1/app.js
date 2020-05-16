const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  const question =
    e.target.parentElement.parentElement.parentElement.nextElementSibling;
  // Show answer
  if (e.target.className == "far fa-plus-square") {
    question.classList.add("show-answer");
    e.target.classList.add("hide-plus");
    e.target.nextElementSibling.classList.add("show-minus");
  }

  // Hide Answer
  if (e.target.classList.contains("fa-minus-square")) {
    question.classList.remove("show-answer");
    e.target.classList.remove("show-minus");
    e.target.previousElementSibling.classList.remove("hide-plus");
  }
});
