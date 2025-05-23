//Here the function playRound is called with Rock/Paper/Scissors when the button is clicked.
buttonRock.addEventListener("click", () => playRound("rock"));
buttonPaper.addEventListener("click", () => playRound("paper"));
buttonScissors.addEventListener("click", () => playRound("scissors"));

// Selecting HTML atributes to show the total score and result of the round
const totalScoreDiv = document.querySelector(".totalScore p");
const resultDiv = document.querySelector(".result");

//Here the function gets a random choice between rock/paper/scissors.
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

//Saving the playRound score
let humanScore = 0; 
let computerScore = 0; 

//
function playRound (humanChoice) {
    const computerChoice = getComputerChoice(); //hier haal ik de computerkeuze op voor de playround

    let resultText = "Result: ";
    
    if (humanChoice === computerChoice){
        resultText = `It's a tie! You both chose ${humanChoice}.`;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        resultText = `You win! Rock beats Scissors`;
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        resultText = "You win! Scissors beats paper!";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        resultText = "You win! Paper beats rock!";
        humanScore++;
    } else {
        resultText = `You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
        computerScore++;
    }

    resultDiv.textContent = `Result: ${resultText}`;

    totalScoreDiv.textContent = `You: ${humanScore} - Computer: ${computerScore}`;

    // Check if someone reached 5 points, wins the game!
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
        resultDiv.textContent = `🎉 Final Score - You: ${humanScore}, Computer: ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    }
}