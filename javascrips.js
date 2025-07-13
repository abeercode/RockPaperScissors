var humanScore = 0;
var computerScore = 0;
const finalResult = document.querySelector("#finalResult")
const result = document.querySelector(".result");
const rScores = document.querySelector(".rScores");

function getComputerChoice() {

    let random = Math.random()
    if (random < 1 / 3) {
        return "rock";
    }
    if (random < 2 / 3) {
        return "scissors";
    }
    return "paper";
}

function playRound(humanChoice, computerChoice) {


    finalResult.textContent = ""

    if (humanChoice === computerChoice) {
        result.textContent = `It's a tie! You both chose ${humanChoice}.`;



    }
    if (humanChoice === "rock") {

        if (computerChoice === "scissors") {

            result.textContent = 'You win! Rock beats scissors';
            humanScore++;


        }
        else {

            result.textContent = 'You lose! Paper beats Rock';
            computerScore++;

        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "rock") {

            result.textContent = 'You win! Paper beats Rock';
            humanScore++;



        }
        else {

            result.textContent = 'You lose! Scissors beats Paper';
            computerScore++;



        }
    }
    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {

            result.textContent = 'You win! Scissors beats Paper';
            humanScore++;
        }
        else {
            result.textContent = 'You lose! Rock beats scissors';
            computerScore++;
        

        }
    }
    rScores.textContent = `You --------- computer \n ${humanScore} --------- ${computerScore}`

    if (humanScore == 5) {
        finalResult.textContent = "you win this game congrats !!!"
        computerScore = 0;
        humanScore = 0;

    }
    else if (computerScore == 5) {

        finalResult.textContent = "you lost , and the computer won!!!"
        computerScore = 0;
        humanScore = 0;



    }
    else if (humanScore == 5 && computerScore == 5) {

        finalResult.textContent = "it's a tie !!!"
        computerScore = 0;
        humanScore = 0;

    }
}




const rock = document.querySelector("#rock")
rock.addEventListener("click", () => { playRound("rock", getComputerChoice()) });


const paper = document.querySelector("#paper")
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())

})
const scissors = document.querySelector("#scissors")
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())

})



