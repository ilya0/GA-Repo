////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}


function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
move = getInput();
var randomNumber = Math.random();

if(move == "rock" || move== "paper" || move=="scissors"){
      console.log("Player move is ....." +move);
      return move;

  }

   if (randomNumber < 0.33) {console.log("Player move is .....Rock " +randomNumber); return "rock";}
      else if (randomNumber < 0.66){console.log("Player move is .....Paper "+randomNumber); return "paper";}
      else {console.log("Player move is .....Scissors "+randomNumber); return "scissors"+randomNumber; }

    }

//// section is finished

function getComputerMove(move) {
var randomNumber = Math.random();

if(move == "rock" || move== "paper" || move=="scissors"){
      console.log("Computer move is ....." +move);
      return move;

  }

   if (randomNumber < 0.33) {console.log("Computer move is .....Rock "+randomNumber); return "rock";}
      else if (randomNumber < 0.66){console.log("Computer move is .....Paper "+randomNumber); return "paper";}
      else {console.log("Computer move is .....Scissors "+randomNumber); return "scissors" }


    }

////// section is finished



function getWinner(playerMove,computerMove) {
    var winner;
    if(playerMove === computerMove){
        winner = "tie";
    }

     if(playerMove === "paper"){
        if(computerMove === "rock"){
            winner = "player";
        }
    }
        else if(computerMove === "scissors"){
            winner = "computer";
        }

    if(playerMove === "scissors"){
        if(computerMove === "rock"){
            winner = "computer";
        }
    }
    else if(computerMove === "paper"){
        winner ="player";
    }
    ////
     if(playerMove === "rock"){
        if(computerMove === "scissors"){
            winner = "player";
        }
    }
    else if(computerMove === "paper"){
        winner ="computer";
    }


   /*  if(playerMove === "rock" && computerMove === "paper"){
       winner = "computer";
   }
    else if(playerMove === "rock" && computerMove === "scissor"){
       winner = "player";
   }

   else if(playerMove === "paper" && computerMove === "rock"){
       winner = "player";
   }
   else if(playerMove === "paper" && computerMove === "scissor"){
       winner = "computer";
   }
      else if(playerMove === "scissor" && computerMove === "paper"){
       winner = "player";
   }
      else if(playerMove === "scissor" && computerMove === "rock"){
       winner = "computer";
   }

  else{

       console.log("something is wrong in the code");
}

*/
 return winner;
}




function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");

    var playerWins = 0;
    var computerWins = 0;

    while(playerWins<5 && computerWins<5){
        var playermoveturn;
        var computermoveturn;

        console.log(getWinner(getPlayerMove(),getComputerMove()));

        if(getWinner() === "player"){
            playerWins+=1;
        }
        else{
            computerWins+=1;
        }
    }


    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

playToFive();
