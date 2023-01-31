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

console.log(getComputerChoice());



/*
function getPlayerChoice() {
 let player = prompt("Choose rock, paper or scissors")
 console.log(player);
 if (player === rock) {
    console.log("I choose rock");
 } else if (player === paper) {
    console.log("I choose paper"); 
 } else if (player === scissor) {
    console.log("I choose Scissor");
 } else {console.log("I choose wrong") }

    }

function playRound(playerSelection, computerSelection) {
   alert(playerSelection + computerSelection);
  }
   
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  playRound(scissor, paper)
  
getComputerChoice()
getPlayerChoice()
*/



 