let randomNumber = Math.floor(Math.random() * 100) - 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.background = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "Game Over!!!";
    setGameOver();
  } else {
    lastResult.textContent = "Worng!";
    lastResult.classList.add('wrong');
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was Too low";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high";
    }
  }

  guessCount++;
  guessField.value = " ";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  lowOrHi.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resultParas = document.querySelector(".resultParas");
  for (let i = 0; i < resultParas.length; i++) {
    resultParas[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guesses.textContent = "Previous guesses: ";
  guessField.focus();

  lastResult.style.background = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}


// let check = lastResult.parentElement.classList.add(' wrong')
// console.log(check);