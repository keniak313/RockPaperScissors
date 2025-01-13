function getRandomInt (min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function actions (action){
    if (action === 1){
        return "Rock";
    }
    else if (action === 2){
        return "Paper";
    }
    else if (action === 3){
        return "Scissors";
    }
    else{
        return "Wrong";
    }
}



let getComputerChoice = 0;// = actions(getRandomInt(1,3));
let getPlayerChoice = 0;// = prompt("Rock, Paper or Scissors?");//actions(getRandomInt(1,3));//

let choiceResult = "Player: " + getPlayerChoice + " Computer: " + getComputerChoice;

let playerScore = 0
let computerScore = 0

function game (player, computer){
    if (
        player === "Rock" && computer === "Scissors" ||
        player === "Scissors" && computer ==="Paper" ||
        player === "Paper" && computer === "Rock"
    ){
        console.log("Player Wins");
        return playerScore++;
    }
    else if (
        computer === "Rock" && player === "Scissors" ||
        computer === "Scissors" && player ==="Paper" ||
        computer === "Paper" && player === "Rock"
    ) {
        console.log("Computer Wins");
        return computerScore++;
    }
    else{
        console.log("It's a Tie...");
    }
}

function playGame (){
    getComputerChoice = actions(getRandomInt(1,3));
    getPlayerChoice = prompt("Rock, Paper or Scissors?");
    console.log("Player: " + getPlayerChoice + " || Computer: " + getComputerChoice);
    game(getPlayerChoice, getComputerChoice);
}

function printInfo (){
    console.log("--Current scores---");
    console.log("Player: " + playerScore + " || Computer: " + computerScore);
    console.log("")
}

const gameNumbers = 5;

for (let i = 1; i <= gameNumbers; i++){
    console.log("Round: " + i);
    playGame();
    printInfo();
    if(i === gameNumbers){
        console.log("GAME OVER");
        console.log("");
        if (playerScore > computerScore){
            console.log("*** PLAYER IS THE WINNER!!! ***");
        }
        else if(computerScore > playerScore){
            console.log("*** COMPUTER IS THE WINNER!!! ***");
        }
        else{
            console.log("~~~NO WINNERS THIS TIME...~~~");
        }
    }
}
