#!/user/bin/env node
import inquirer from "inquirer";
const randomNumber=Math.floor( Math.random()*6+1)
const answer = await inquirer.prompt([{
      name:"userGuessedNumber",
      type:"Number",
      messege:"please guess a number between 1 to 6",
},
])
if(answer.userGuessedNumber===randomNumber){

    console.log("congratulations! You are winner");
}
else{

    console.log("You lose");

}

