window.onload = function () {
  const btn = document.getElementById("btn");
  const input = document.getElementById("input");
  const pic = document.getElementById("pic");
  const evaluation = document.getElementById("evaluation");
  const comment = document.getElementById("comment");
  const result = document.querySelector(".result");

  let counter = 0;

  btn.addEventListener("click", () => {
    if (document.getElementById("city1").checked) {
      counter++;
    }
    if (document.getElementById("no").checked) {
      counter++;
    }
    if (input.value == "rabat") {
      counter++;
    }

    input.value = "";

    if (counter == 0) {
      result.style.visibility = "visible";
      evaluation.innerHTML = `You've got ${counter} correct.`;
      comment.innerHTML = "You can do better than that!!";
      pic.style.backgroundImage = "url(/img/lose.gif)";
    } else if (counter == 1) {
      result.style.visibility = "visible";
      evaluation.innerHTML = `You've got ${counter} correct.`;
      comment.innerHTML = "Meh!";
      pic.style.backgroundImage = "url(/img/meh.gif)";
    } else if (counter == 2) {
      result.style.visibility = "visible";
      evaluation.innerHTML = `You've got ${counter} correct.`;
      comment.innerHTML = "Not bad!!";
      pic.style.backgroundImage = "url(/img/not-bad.gif)";
    } else if (counter == 3) {
      result.style.visibility = "visible";
      evaluation.innerHTML = `You've got ${counter} correct.`;
      comment.innerHTML = "Good job!!";
      pic.style.backgroundImage = "url(/img/win.gif)";
    }
  });
};
