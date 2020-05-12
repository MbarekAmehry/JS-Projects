const btn = document.querySelector(".btn");
const input = document.getElementById("input");
const messageOut = document.getElementById("messageOut");

btn.addEventListener("click", sendMessage);

function sendMessage() {
  if (input.value === "") {
    showAlert("danger", "Please enter a valid value");
    input.style.border = "2px solid red";
    input.style.boxShadow = "0 0 5px red";

    setTimeout(() => {
      input.style.border = "2px solid cyan";
      input.style.boxShadow = "none";
    }, 1500);
  } else {
    messageOut.innerHTML = input.value;
    input.value = "";
    showAlert("success", "Message sent!");
    input.style.border = "2px solid #14e117";
    setTimeout(() => {
      input.style.border = "2px solid cyan";
    }, 1500);
  }
}

function showAlert(classname, message) {
  const div = document.createElement("div");
  div.className = `alert alert-${classname}`;
  div.appendChild(document.createTextNode(message));
  const head = document.querySelector(".head");
  const container = document.querySelector(".container");
  container.insertBefore(div, input);
  setTimeout(() => document.querySelector(".alert").remove(), 1500);
}
