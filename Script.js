console.log("Hello World!")
// variables

let rock;
let paper;
let scissors;
// Randomly return rock, paper or scissors

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber == 0){
         console.log("Rock!");
    }
    else if (randomNumber == 1){
         console.log("Paper!");
    }
    else {
         console.log("Scissors!");
    }
    
}
getComputerChoice()
