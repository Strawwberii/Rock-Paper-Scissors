console.log("Hello World!")
// variables

let rock;
let paper;
let scissors;
let computerSelection;

// Randomly return rock, paper or scissors

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber == 0){
        return computerSelection = "Rock!";
    }
    else if (randomNumber == 1){
         return computerSelection = "Paper!";
    }
    else {
         return  computerSelection = "Scissors!";
    }
    
}

// Get player's selection

let playerSelection = prompt("Enter rock, paper or scissors!");
playerSelection = playerSelection.toLowerCase();

// find the winner

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return alert("That's a draw!");
    }
    else if (playerSelection == rock && computerSelection == paper){
        return alert("You lose! Paper beats Rock!!");

    }
    else if (playerSelection == rock && computerSelection == scissors){
        return alert("You win! Rock beats Scissors!");

    }
    else if (playerSelection == paper && computerSelection == rock){
        return alert("You win! Paper beats Rock!!");
    }
    else if (playerSelection == paper && computerSelection == scissors){
        return alert("You lose! Scissors beat Paper!");
    }
    else if (playerSelection == scissors && computerSelection == paper ){
        return alert("You win! Scissors beats Paper!!");
    }
    else if (playerSelection == scissors && computerSelection == rock){
        return alert("You lose! Rock beats Scissors");
    }


}

playRound();