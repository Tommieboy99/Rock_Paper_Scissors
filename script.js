let humanScore = 0;
let computerScore = 0;

function getHumanChoice () {
    let userInput = prompt("rock, paper, scissors?");
    return userInput
}

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random()*3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound (humanChoice, computerChoice) {
    humanChoice = humanSelection.toLowerCase();
    computerChoice = computerSelection;

    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound (humanSelection, computerSelection);