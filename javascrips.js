var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {

    let random = Math.random()
    if (random < 0.33) {
        return "rock";
    }
    if (random < 0.6) {
        return "scissors";

    }
    return "paper";

}

function getHumanChoice() {
    let humanChoice = prompt("choose rock or paper or Scissors");
    return humanChoice.toLowerCase();


}

function playRound(humanChoice, computerChoice) {


    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
        return;
    }

    if (humanChoice === "rock") {

        if (computerChoice === "scissors") {
            humanScore++;
            console.log('You win! Rock beats scissors');
        }
        else {
            computerScore++;
            console.log('You lose! Paper beats Rock');
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === " rock") {
            humanScore++;
            console.log('You win! Paper beats Rock');
        }
        else {
            computerScore++;
            console.log('You lose! Scissors beats Paper');
        }
    }
    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore++;
            console.log('You win! Scissors beats Paper');
        }
        else {
            computerScore++;
            console.log('You lose! Paper beats Rock');
        }
    }


}

playRound(getHumanChoice(), getComputerChoice());