const btn = document.querySelector(".btn");
const vowelsOutput = document.querySelector(".vowelsOutput");
const vowelsLength = document.querySelector(".vowelsLength");

btn.addEventListener("click", getVowels);

function getVowels() {
  const input = document.querySelector(".input").value.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u", "y"];
  let arr = [];

  for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
      arr.push(input[i]);
    }
  }
  vowelsLength.innerText = arr.length;
  vowelsOutput.innerText = arr;
  document.querySelector(".input").value = "";
}

getVowels();
