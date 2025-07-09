

function getComputerChoice(){

    let random = Math.random()
 if (random <  0.33) {
    return "Rock";
 }
  if (random < 0.6) {
    return "Scissors";

 }
    return "Paper";
 
}


function getHumanChoice(){

    
}

console.log(getComputerChoice())