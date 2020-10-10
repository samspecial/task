let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const targetNumber = document.querySelector("#target-number");
const humanGuess = document.querySelector("#human-guess");
const computerGuess = document.querySelector("#target-number");
const humanPoint = document.querySelector("#human-score");
const computerPoint = document.querySelector("#computer-score");
// const humanGuess = document.querySelector("#human-guess");

const guessBtn = document.querySelector("#guess");
const nextRoundBtn = document.querySelector("#next-round");

function generateTarget() {
  return (Math.floor(Math.random() * 10))
}

// Event Handlers
guessBtn.addEventListener("click", makeGuess);
nextRoundBtn.addEventListener("click", advanceRound);

function makeGuess() {
  if (humanGuess.value > 9) {
    alert("Number is out of range. Numbers between 0 - 9 allowed.")
  } else {
    targetNumber.innerHTML = generateTarget();
    let result = compareGuesses(humanGuess.value, parseInt(computerGuess.innerHTML), targetNumber.innerHTML);
    console.log(result)
    updateScore(result);
  }
}

function compareGuesses(human, computer, guess) {
  let humanPlayer = Math.abs(human - guess);
  let computerPlayer = Math.abs(computer - guess);

  if (humanPlayer < computerPlayer) {
    return humanPlayer;
  } else if (humanPlayer == computerPlayer) {
    return humanPlayer;
  } else {
    return computerPlayer;
  }
}

function updateScore(winner) {
  // increase uodate score or humanscore by one
  if (winner == true) {
    humanScore += 1

  } else {
    computerScore += 1
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}