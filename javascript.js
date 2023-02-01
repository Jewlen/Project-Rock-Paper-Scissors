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
  

const rock = 0;
const paper = 1;
const scissor = 2;

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

//console.log(getComputerChoice());

function getPlayerChoice() {
 let player = prompt("Choose rock, paper or scissors").toLowerCase();
 console.log(player);
 if (player === playerRock) {
    console.log("I choose rock");
    return rock;
 } else if (player === playerPaper) {
    console.log("I choose paper"); 
    return paper;
 } else if (player === playerScissor) {
    console.log("I choose Scissor");
    return scissor;
 } else {console.log("I choose wrong") }
}

let playerRock = "rock"
let playerPaper = "paper"
let playerScissor = "scissor"

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();



//console.log(getPlayerChoice());


function playRound(playerSelection, computerSelection) {
   alert(playerSelection + computerSelection);
   if (playerSelection = computerSelection) {
    console.log("Draw");
   } else if (playerSelection > computerSelection) {
    console.log("Scissor beats Paper, Scissor wins");
   } else console.log("null");
  }
 
 
/*


  console.log(playRound(playerSelection, computerSelection));

*/




 