var humanScore =0;
var computerScore =0;

function getComputerChoice() {

    let random = Math.random()
    if (random < 0.33) {
        return "Rock";
    }
    if (random < 0.6) {
        return "Scissors";

    }
    return "Paper";

}

function getHumanChoice() {
    let humanChoice = prompt("choose rock or paper or Scissors");
    return humanChoice;


}
console.log(getHumanChoice());