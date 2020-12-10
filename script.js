import {startConfetti, stopConfetti, removeConfetti} from "./confetti.js"

const playerScoreEl = document.querySelector("#playerScore");
const playerChoiceEl = document.querySelector("#playerChoice");
const computerScoreEl = document.querySelector("#computerScore");
const computerChoiceEl = document.querySelector("#computerChoice");
const resultText = document.querySelector("#resultText");

const playerRock = document.querySelector("#playerRock");
const playerPaper = document.querySelector("#playerPaper");
const playerScissors = document.querySelector("#playerScissors");
const playerLizard = document.querySelector("#playerLizard");
const playerSpock = document.querySelector("#playerSpock");

const computerRock = document.querySelector("#computerRock");
const computerPaper = document.querySelector("#computerPaper");
const computerScissors = document.querySelector("#computerScissors");
const computerLizard = document.querySelector("#computerLizard");
const computerSpock = document.querySelector("#computerSpock");

const allGameIcons = document.querySelectorAll(".far");

const choices = {
  rock: {
    name: "Rock",
    defeats: ["scissors", "lizard"],
  },
  paper: {
    name: "Paper",
    defeats: ["rock", "spock"],
  },
  scissors: {
    name: "Scissors",
    defeats: ["paper", "lizard"],
  },
  lizard: {
    name: "Lizard",
    defeats: ["paper", "spock"],
  },
  spock: {
    name: "Spock",
    defeats: ["scissors", "rock"],
  },
};

let computerChoice = ""
let playerScore = 0
let computerScore = 0

function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}

function resetAll(){
  resetSelected()
  playerScore = 0
  computerScore = 0
  resultText.textContent = "";
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  stopConfetti();
  removeConfetti()
}
window.resetAll = resetAll

function computerRandomChoice() {
  const computerRandomNumber = Math.random()
  if (computerRandomNumber < 0.2) {
    computerChoice = "rock"
  } else if (computerRandomNumber <= 0.4) {
    computerChoice = "paper"
  } else if (computerRandomNumber <= 0.6) {
    computerChoice = "scissors"
  } else if (computerRandomNumber <= 0.8) {
    computerChoice = "lizard"
  } else if (computerRandomNumber <= 1) {
    computerChoice = "spock"
  }
}

function displayComputerChoice() {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
}

function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "Its a tie"
  } else {
    const choice = choices[playerChoice]
    if (choice.defeats.indexOf(computerChoice) > -1) {
      startConfetti();
      resultText.textContent = "You Won!";
      playerScore++;
      playerScoreEl.textContent = playerScore;
    } else {
      stopConfetti();
      removeConfetti()
      resultText.textContent = "You Lose!";
      computerScore++;
      computerScoreEl.textContent = computerScore;
    }
  }
}

function checkResult(playerChoice) {
  resetSelected()
  computerRandomChoice()
  displayComputerChoice();
  updateScore(playerChoice)
}

function select(playerChoice) {
  checkResult(playerChoice);
  switch (playerChoice) {
    case `rock`:
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;
    case `paper`:
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;
    case `scissors`:
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " --- Scissors";
      break;
    case `lizard`:
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      break;
    case `spock`:
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
      break;
    default:
      // code block
  }
}
window.select = select

//onload
resetAll()