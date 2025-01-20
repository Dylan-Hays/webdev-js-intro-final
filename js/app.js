"use strict";

// Select elements
const guessInput = document.getElementById("guess-input");
const submitButton = document.getElementById("submit-btn");
const restartButton = document.getElementById("restart-btn");

const guessMessage = document.getElementById("guess-message");
const currentGuess = document.getElementById("current-guess");
const computerGuess = document.getElementById("computer-guess");
const guessHistory = document.getElementById("guess-history");

// Initialize game variables
let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;
let history = [];

// Function to handle guess submission
submitButton.addEventListener("click", function () {
  let userGuess = Number(guessInput.value);

  if (userGuess < 1 || userGuess > 10 || isNaN(userGuess)) {
    guessMessage.textContent = "Please enter a number between 1 and 10.";
    return;
  }

  history.push(userGuess);
  currentGuess.textContent = userGuess;
  computerGuess.textContent = "?"; // Hide until game ends

  if (userGuess === randomNumber) {
    guessMessage.textContent = "Congratulations! You guessed it right!";
    computerGuess.textContent = randomNumber;
    endGame();
  } else {
    attempts--;
    guessMessage.textContent =
      userGuess > randomNumber ? "Too high!" : "Too low!";
  }

  guessHistory.textContent = history.join(", ");

  if (attempts === 0 && userGuess !== randomNumber) {
    guessMessage.textContent =
      "Sorry, you lost! The number was " + randomNumber;
    computerGuess.textContent = randomNumber;
    endGame();
  }

  guessInput.value = ""; // Clear input field
});

// Function to end the game
function endGame() {
  submitButton.disabled = true;
  restartButton.disabled = false;
}

// Restart the game
restartButton.addEventListener("click", function () {
  attempts = 3;
  history = [];
  randomNumber = Math.floor(Math.random() * 10) + 1;

  guessMessage.textContent = "";
  currentGuess.textContent = "";
  computerGuess.textContent = "";
  guessHistory.textContent = "";

  submitButton.disabled = false;
  restartButton.disabled = true;
});
