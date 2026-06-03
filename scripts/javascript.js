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