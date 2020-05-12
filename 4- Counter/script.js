const output = document.querySelector(".output");
const lowerCount = document.querySelector(".lowerCount");
const addCount = document.querySelector(".addCount");
const reset = document.querySelector(".fas");

addCount.addEventListener("click", addNum);

let i = 0;
function addNum() {
  // Method #1
  /* if (i < Infinity) {
    i++;
  } else if (i > -Infinity) {
    i++;
  }
  output.innerHTML = i; */
  // Method #2
  i++;
  output.innerHTML = i;
  if (output.innerHTML > 0) {
    output.style.color = "#4caf50";
  }
  output.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards",
  });
}

lowerCount.addEventListener("click", decNumber);

function decNumber() {
  i--;
  output.innerHTML = i;
  if (output.innerHTML < 0) {
    output.style.color = "red";
  }
  output.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards",
  });
}

reset.addEventListener("click", resetCount);

function resetCount() {
  i = 0;
  output.innerHTML = i;
  output.style.color = "#fff";
}
