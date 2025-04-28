function getHumanChoice () {
    let userInput = prompt("rock, paper, scissors?");
    return userInput
}

console.log(getHumanChoice())

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

console.log(getComputerChoice())
