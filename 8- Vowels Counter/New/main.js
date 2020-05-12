window.onload = function () {
  const btn = document.querySelector(".btn");
  const vowelsOutput = document.querySelector(".vowelsOutput");
  const vowelsLength = document.querySelector(".vowelsLength");

  btn.addEventListener("click", getVowels);

  function getVowels() {
    const input = document.querySelector(".input").value.toLowerCase();
    let regVowels = /[aeuioy]/gi;
    let result = input.match(regVowels);

    vowelsOutput.innerText = result;
    vowelsLength.innerText = result.length;

    document.querySelector(".input").value = "";
  }

  getVowels();
};
