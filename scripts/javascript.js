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
    console.log("computer picked:" + selectedVar);
    return selectedVar
}


function getHumanChoice() {
    let choice = prompt("Pick one of the following: Rock, Paper, or Scissors");
    let lowerC = choice.toLowerCase();
    console.log("player picked:" + lowerC);
    return lowerC
}


let humanScore = 0;
let computerScore = 0;

function humanWins() {
    humanScore++;
    console.log("You win this round!!!");
}

function computerWins() {
    computerScore++;
    console.log("The Computer won this round...");
}

function tieGame() {
    console.log("Tie, no points awarded this round")
}

function playRound(human, computer) {
    if (human === computer) {
        tieGame();
    } else if ((human === "rock") && (computer === "paper")) {
        computerWins();
    } else if ((human === "rock") && (computer === "scissors")) {
        humanWins();
    } else if ((human === "paper") && (computer === "scissors")) {
        computerWins();
    } else if ((human === "paper") && (computer === "rock")) {
        humanWins();
    } else if ((human === "scissors") && (computer === "rock")) {
        computerWins();
    } else if ((human === "scissors") && (computer === "paper")) {
        humanWins();
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection); //this line gets moved down below

function playGame() {
    let roundsPlayed = 0;
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Your Score:" + humanScore);
        console.log("Computer Score:" + computerScore);
        
        roundsPlayed++;
        console.log("Rounds Played: "+ roundsPlayed);
        
    }
    if (humanScore > 3) {
        console.log("You Won it all!!!");
    } else {
        console.log("The computer won it all this time");
    }
}
playGame();


