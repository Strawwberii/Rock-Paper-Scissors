console.log("Hello World!")
// variables

let rock;
let paper;
let scissors;
// Randomly return rock, paper or scissors

function getComputerChoice(){
    let randomNumber = Math.random(0.2)*10;
    if (randomNumber == 0){
        return console.log("Rock!");
    }
    else if (randomNumber == 1){
        return console.log("Paper!");
    }
    else {
        return console.log("Scissors!");
    }
    
}
getComputerChoice()
