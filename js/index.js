window.addEventListener("load", init);

let time = 5;
let score = 0;
let isPlaying;

// DOM elements
const wordInput = document.getElementById("word-input");
const currentWord = document.getElementById("current-word");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const message = document.getElementById("message");
const seconds = document.getElementById("seconds");
const difficulty = document.getElementById("difficulty").value;

// generate random word from API
async function fetchWord() {
  try {
    const response = await fetch(`https://random-words-api.vercel.app/word`);
    const data = await response.json();
    const word = await data[0].word;

    console.log(word);
    currentWord.innerHTML = word;
  } catch (error) {
    console.error(error);
  }
}

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
];

// fetchWord();

// Initialize game
function init() {
  // Load word from array
  showWordArray(words);

  // Call countdown every second
  setInterval(countdown, 1000);
}

// Pick & show random word
function showWordArray(words) {
  // generate random array index
  const randIndex = Math.floor(Math.random() * words.length);

  // output random word
  currentWord.innerHTML = words[randIndex];
}

// countdown timer
function countdown() {
  // make sure time is not run out
  if (time > 0) {
    // decrement time
    time--;
  } else if (time === 0) {
    // game is over
    isPlaying = false;
  }
  // show time
  timeDisplay.innerHTML = time;
}
