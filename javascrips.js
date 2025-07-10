    var humanScore = 0;
    var computerScore = 0;

function getComputerChoice() {

    let random = Math.random()
    if (random < 1/3) {
        return "rock";
    }
    if (random < 2/3) {
        return "scissors";

    }
    return "paper";

}

function getHumanChoice() {
    let humanChoice = prompt("choose rock or paper or Scissors");
    return humanChoice.toLowerCase().trim();


}

function playRound(humanChoice, computerChoice) {


    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
        return;
    }

    if (humanChoice === "rock") {

        if (computerChoice === "scissors") {

            console.log('You win! Rock beats scissors');
            return humanScore++;
        }
        else {
           
            console.log('You lose! Paper beats Rock');
            return computerScore++;
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            
            console.log('You win! Paper beats Rock');
            return humanScore++;
        }
        else {
            
            console.log('You lose! Scissors beats Paper');
            return computerScore++;
        }
    }
    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            
            console.log('You win! Scissors beats Paper');
            return humanScore++;
        }
        else {
            console.log('You lose! Rock beats scissors');
            return computerScore++;
        }
    }


}


function playGame(){


    for( let step =0 ; step< 5 ; step ++){
        playRound(getHumanChoice(), getComputerChoice() )
    }

    if (humanScore > computerScore) {
        console.log ( "you win this game congrats !!!")
    }
    else if (computerScore > humanScore){

        console.log("you lost , and the computer won!!!")
    }
    else {

        console.log("it's a tie !!!")
    }
    
}

playGame();