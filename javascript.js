//what we have available
    //Variables:
    //Data Types: 
        //Numbers: Operators and Operands
        //string
        //Boolean
        //null
        //undefined

        //Need to understand Objects!

    //conditions: If/Else
        //Logical Operators: AND, OR, NOT
        //Need to Understand Switch Statment!

    //Funtions
        //parameters
        //return: Need to understand!


    //Rock = 0
    //Paper = 1
    //Scissor = 2
const rock = "0";
const paper = "1";
const scissor = "2";

let playerRock = "rock"
let playerPaper = "paper"
let playerScissor = "scissor"



    function game() {
       
    for (let i = 1; i <= 5; i++) {
        console.log(i)
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();  
        playRound(playerSelection, computerSelection);
    }
}
 
game();  




function getComputerChoice() {
let handGen = Math.floor(Math.random() * 3);
    
    if (handGen === 0) {
        console.log("Rock");
        return rock;
    } else if (handGen === 1) {
        console.log("Paper")
        return paper;
    } else if (handGen === 2) {
        console.log("Scissor")
        return scissor;
    }
}

function getPlayerChoice() {
 let playerInput = prompt("Choose rock, paper or scissors").toLowerCase();
 console.log(playerInput);
 if (playerInput === playerRock) {
    console.log("I choose rock");
    return rock;
 } else if (playerInput === playerPaper) {
    console.log("I choose paper"); 
    return paper;
 } else if (playerInput === playerScissor) {
    console.log("I choose Scissor");
    return scissor;
 } else {console.log("I choose wrong") }
}




function playRound(playerSelection, computerSelection) {
   let match = playerSelection + computerSelection;
   console.log(match);
   if (match === "00" || match === "11" || match === "22") {
    alert("Draw");
} else if (match === "01") {
    alert("paper beats rock, Computer Wins");
    //return playerWins;
} else if (match === "10") {
    alert("paper beats rock, Player Wins");
    //return computerWins;
} else if (match === "02") {
    alert("rock beats scissors, Player Wins");
    //return playerWins;
} else if (match === "20") {
    alert("rock beats scissors, Computer Wins");
    //return computerWins;
} else if (match === "12") {
    alert("Scissors beats Paper, Player Wins");
    //return playerWins;
} else if (match === "21") {
    alert("Scissors beats Paper, Computer Wins");
    //return computerWins;
   } else {console.log("testing")} 
}
 //playRound(playerSelection, computerSelection);
 





//have for loop go from 1 to 5, with each number representing a round
//have the round unction be carried out on each number
//keep tally of weither computer or player loses/wins

 /*if (i === 1 || i === 2 || i === 3 || i === 4 || i === 5) {
            getComputerChoice();
            getPlayerChoice();
            playRound(playerSelection, computerSelection);
        }*/