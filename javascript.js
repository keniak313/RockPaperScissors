function getRandomInt (min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function actions (action){
    if (action === 1){
        return "ROCK";
    }
    else if (action === 2){
        return "PAPER";
    }
    else if (action === 3){
        return "SCISSORS";
    }
    else{
        return "Wrong";
    }
}



let getComputerChoice = 0;
let getPlayerChoice = 0;

let choiceResult = "Player: " + getPlayerChoice + " Computer: " + getComputerChoice;

let playerScore = 0
let computerScore = 0

let gamesPlayed = 0;

function game (player, computer){
    if (
        player === "ROCK" && computer === "SCISSORS" ||
        player === "SCISSORS" && computer ==="PAPER" ||
        player === "PAPER" && computer === "ROCK"
    ){
        playerScore++;
        return "Player Wins";
    }
    else if (
        computer === "ROCK" && player === "SCISSORS" ||
        computer === "SCISSORS" && player ==="PAPER" ||
        computer === "PAPER" && player === "ROCK"
    ) {
        computerScore++;
        return "Computer Wins";
    }
    else{
        return "It's a Tie..."
    }
}

const divPlayerChoice = document.querySelector("#player.choice");
const divComputerChoice = document.querySelector("#computer.choice");
const divResult = document.querySelector("#container.result");
const divPlayerScore = document.querySelector("#player.score");
const divComputerScore = document.querySelector("#computer.score");
const divGamesPlayed = document.querySelector("#container.games");
const btn = document.querySelectorAll("button");
btn.forEach((button) => button.addEventListener(
    "click", () => {
        divPlayerChoice.textContent = button.getAttribute("class").toUpperCase();
        playNewGame(divPlayerChoice.textContent);
    }
));

function playNewGame(playerChoice){
    let result;
    getPlayerChoice = playerChoice;
    getComputerChoice = actions(getRandomInt(1,3));
    divComputerChoice.textContent = getComputerChoice.toUpperCase();
    result = game(getPlayerChoice, getComputerChoice);
    gamesPlayed++;
    divResult.textContent = result;
    divPlayerScore.textContent = playerScore;
    divComputerScore.textContent = computerScore;
    divGamesPlayed.textContent = "Games Played: " + gamesPlayed;
}



/*
const btn = document.querySelectorAll("button");
console.log(btn);
btn.forEach((button) =>{
    button.addEventListener("mouseover", () => {
        if(button.matches(":hover")){
            button.classList.toggle("hover");
        }else{
            button.classList.toggle("hover");
        }
    });
});



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

*/

