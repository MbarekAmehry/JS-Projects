// ******* Method #1 (traversing the DOM) ******
// document.querySelectorAll(".btn-question").forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let question = e.target.parentElement.parentElement.parentElement;
//     if (
//       e.target.classList.contains("fa-plus-square") ||
//       e.target.classList.contains("fa-minus-square")
//     )
//       question.classList.toggle("show-answer");
//   });
// });

// ******* Method #1 ******
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".btn-question");
  btn.addEventListener("click", () => {
    // kep only one answer visible
    questions.forEach((item) => {
      if (item !== question) {
        item.parentElement.classList.remove("show-answer");
      }
    });
    // Show & hide answer
    question.parentElement.classList.toggle("show-answer");
  });
});
