const jokeEl = document.getElementById("joke");
// get the button
const get_joke = document.getElementById("get_joke");
// add event to the button
get_joke.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  // call i canhas API
  const jokeRes = await fetch("https://icanhazdadjoke.com/", {
    // this API needs to pass in the headers
    headers: {
      // this will tell the API that we need a json response
      Accept: "application/json"
    }
  });
  const joke = await jokeRes.json();
  console.log(joke);
  // set the new joke
  jokeEl.innerHTML = joke.joke
}
