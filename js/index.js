import { words } from "./helpers";

window.addEventListener("load", init);

// Globals

// Available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
};

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM elements
const wordInput = document.getElementById("word-input");
const currentWord = document.getElementById("current-word");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const message = document.getElementById("message");
const seconds = document.getElementById("seconds");
// const difficulty = document.getElementById("difficulty").value;

// Initialize game
function init() {
  // Load word from array
  showWordArray(words);

  // start matching on word input
  wordInput.addEventListener("input", startMatch);

  // Call countdown every second
  setInterval(countdown, 1000);

  // check game status
  setInterval(checkStatus, 50);
}

// start match
function startMatch() {
  seconds.innerHTML = currentLevel;
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWordArray(words);
    wordInput.value = "";
    score++;
  }

  // if score is -1 display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// match current word to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
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

// check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}
