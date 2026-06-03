function getComputerChoice() {
    let a = "rock";
    let b = "paper";
    let c = "scissors";
    const rand = Math.random();
    let selectedVar;
    if (rand < 1 / 3) {
        selectedVar = a;
    } else if (rand < 2 / 3) {
        selectedVar = b;
    } else {
        selectedVar = c;
    }
    return console.log(selectedVar)
}
getComputerChoice();

function getHumanChoice() {
    let choice = prompt("Pick one of the following: Rock, Paper, or Scissors");
    let lowerC = choice.toLowerCase();
    return console.log(lowerC)
}

getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(human, computer) {
    if (human === "rock" & computer === "rock") {
        return console.log("Tie, no points awardered")
    } else if (human === "rock" & computer === "paper") {
        computerScore++;
        return console.log("Computer wins this one")
    } else if (human === "rock" & computer === "scissors") {
        humanScore++;
        return console.log("You win this one")
    } else if (human === "paper" & computer === "paper") {
        return console.log("Tie, no points awardered")
    } else if (human === "paper" & computer === "scissors") {
        computerScore++;
        return console.log("Computer wins this one")
    } else if (human === "paper" & computer === "rock") {
        humanScore++;
        return console.log("You win this one")
    } else if (human === "scissors" & computer === "scissors") {
        return console.log("Tie, no points awardered")
    } else if (human === "scissors" & computer === "rock") {
        computerScore++;
        return console.log("Computer wins this one")
    } else if (human === "scissors" & computer === "paper") {
        humanScore++;
        return console.log("You win this one")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);