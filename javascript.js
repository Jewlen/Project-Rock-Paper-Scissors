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

function getComputerChoice() {
    //Rock = 0
    //Paper = 1
    //Scissor = 2
    const Rock = 0;
    const Paper = 1;
    const Scissor = 2;
    Math.floor(Math.random() * 3);
    console.log(Math.random());
   
   
    let handGen = undefined; 
    handGen = Math.floor(Math.random() * 3);
    console.log(handGen)

    if (handGen === 0) {
        console.log("Rock");
    } else if (handGen === 1) {
     console.log("Paper")
    } else {
        console.log("Scissor")
    }
   

}


getComputerChoice()