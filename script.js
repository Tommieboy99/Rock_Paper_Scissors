function playGame() {
    let humanScore = 0; //score van de mens
    let computerScore = 0; //score van de computer

    //functie om de keuze van de mens te krijgen
    function getHumanChoice () {
        let userInput = prompt("rock, paper, scissors?");
        return userInput
    }

    //functie om de random-keuze van de computer te krijgen
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
        humanChoice = humanChoice.toLowerCase();
    
        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
    
        if (humanChoice === computerChoice){
            console.log("It's a tie!")
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors!");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats paper!");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats rock!");
            humanScore++;
        } else {
            console.log("You lose!");
            computerScore++;
        }
    
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice(); // verkrijg de keuze van de mens
        const computerSelection = getComputerChoice(); // verkrijg de keuze van de computer
        playRound (humanSelection, computerSelection); // speel de ronde
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You are the winner!"); 
    } else if (computerScore > humanScore) {
        console.log("You lost against the computer!")
    } else {
        console.log ("It's a tie game!")
    }
}

playGame();