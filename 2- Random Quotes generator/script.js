var quotes = [
  { name: "Steve Jobs", quote: "Stay Hungry. Stay Foolish." },
  {
    name: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken."
  },
  { name: "Pablo Picasso", quote: "Good Artists Copy, Great Artists Steal." },
  { name: "Paul Graham", quote: "Argue with idiots, and you become an idiot." },
  {
    name: "Leonardo Da Vinci",
    quote: "Simplicity is the ultimate sophistication."
  },
  {
    quote: "I'm not sure if I was the first man in space or the last dog.",
    name: "-Yuri Gagarin",
  },
  {
    quote: "'We’ll never survive!' 'Nonsense. You’re only saying that because no one ever has.'",
    name: "-William Goldman",
  },
  {
    quote: "You know, Hobbes, some days even my lucky rocket ship underpants don't help.",
    name: "-Bill Watterson",
  },
  {
    quote: "You people talk about the living and the dead as if they were two mutually exclusive categories. As if you cannot have a river that is also a road, or a song that is also a color.",
    name: "-Neil Gaiman",
  },
  {
      quote:"Yet man will never be perfect until he learns to create and destroy; he does know how to destroy, and that is half the battle.",
      name: "-Alexandre Dumas",
  },
  {
      quote:"Never let your sense of morals prevent you from doing what is right.",
      name: "-Isaac Asimov",
  },
  {
      quote: "Let's think the unthinkable, let's do the undoable. Let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.",
      name: "-Douglas Adams",

  },
  {
      quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
      name: "-Ayn Rand",
  },
  {
      quote: "I'm not dumb. I just have a command of thoroughly useless information.",
      name: "-Bill Watterson",
  },
  {
      quote:"A bone to the dog is not charity. Charity is the bone shared with the dog, when you are just as hungry as the dog.",
      name:"-Jack London",
  }
];

const blockQuote = document.querySelector(".blockQuote");
const author = document.querySelector(".author");
const btn = document.querySelector(".btn");


btn.addEventListener('click', generateQuote);

function generateQuote(){
    let random = Math.floor(Math.random()*quotes.length);
    // Generate random Quote.
    blockQuote.innerHTML = quotes[random].quote;
    // Generate its Author.
    author.innerHTML = quotes[random].name;

}