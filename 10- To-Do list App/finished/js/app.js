const input = document.getElementById("input");
const list = document.getElementById("list");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// variable
let LIST = [],
  id = 0;

// Get the current date
const dateSection = document.getElementById("date");
const options = {
  weekday: "long",
  month: "short",
  day: "numeric",
  year: "numeric",
};
const today = new Date();
dateSection.innerHTML = today.toLocaleDateString("en-US", options);

// Get input value
const btn = document.getElementById("add");

// btn.addEventListener("click", addTodo);

function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  const item = `<li class="item">
                  <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                  <p class="text ${LINE}">${toDo}</p>
                  <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                </li>
              `;

  const position = "beforeend";

  list.insertAdjacentHTML(position, item);

  input.value = "";
}

// add item to list when user clicks on Enter key.
document.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    const inputValue = input.value;

    //if input isn't empty
    if (inputValue !== "") {
      addToDo(inputValue, id, false, false);

      LIST.push({
        name: inputValue,
        id: id,
        done: false,
        trash: false,
      });
      id++;
    } else return;
  }
});

// Complete toDo
function completeTodo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;
}

// Delete To do
function removeTodo(el) {
  el.parentNode.parentNode.removeChild(el.parentNode);

  LIST[el.id].trash = true;
}

// target items created dynamically
document.getElementById("list").addEventListener("click", (event) => {
  const element = event.target; // return el clicked in the list
  const elementJob = element.attributes.job.value; // complete or delete

  if (elementJob == "complete") {
    completeTodo(element);
  } else if (elementJob == "delete") {
    removeTodo(event.target);
  }

  // console.log(element);
});
