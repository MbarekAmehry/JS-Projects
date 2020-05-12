const btn = document.querySelector(".btn");
const para = document.querySelector(".para");

// #1 Method
/*
const colors = ["yellow", "green", "#666", "red", "darkblue", "#910c4a"];

btn.addEventListener("click", changeColor);
function changeColor() {
  //let randomColors = Math.floor(Math.random() *colors.length);
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  body.style.backgroundColor = randomColor;
}
*/

// #2 Method
/*
btn.addEventListener("click", changeColor2);

function changeColor2(){
  let symbol = '0123456789ABCDEF';
  let hex = '#';
  for (let i=0; i<6; i++){
    hex = hex + symbol[Math.floor(Math.random() * 16)];
    console.log(hex);
  }
  document.body.style.backgroundColor = hex;
  para.innerHTML = hex;
}
*/

// #3 Method
btn.addEventListener("click", changeColor3);

function changeColor3(){
  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);  document.body.style.backgroundColor = randomColor;
  para.innerHTML = randomColor;
}


