function computerPlay(max) {
    return Math.floor(Math.random() * Math.floor(max));
 };
 
 let computerValue = computerPlay(2);
 
 function trans(num) {
     if (num == 0) {
         return "Rock";
     } else if (num == 1) {
         return "Scissors";
     } else if (num == 2) {
         return "Paper";
     }
 }
 
 let oppHand = trans(computerValue);
 
 
 function playRound(playerSelection, computerSelection) {

     console.log("You chose " + trans(playerSelection));
     console.log("Computer chose " + oppHand);
     
     if (playerSelection == computerSelection) {
         return "Draw";
     } else if ((playerSelection == 1 && computerSelection == 0) || (playerSelection == 0 && computerSelection == 2) || (playerSelection == 2 && computerSelection == 1)) {
         return "Computer Wins";
     } else if ((playerSelection == 0 && computerSelection == 1) || (playerSelection == 2 && computerSelection == 0) || (playerSelection == 1 && computerSelection == 2)) {
         return "Player Wins";
     }
     
   };
   
 function transInput(val) {
     let b = val.toLowerCase();
     if (b == "rock") {
         return 0;
     } else if (b == "scissors") {
         return 1;
     } else if (b == "paper") {
         return 2;
     }
 };
 
 let compScore = 0;
 let playerScore = 0;

 function game() {
    for (let i = 0; i <= 4; i++) {
        let answerOne = playRound(transInput(prompt("choose")), computerValue);
        console.log(answerOne);
        if (answerOne == "Computer Wins") {
            compScore++
        } else if (answerOne == "Player Wins") {
            playerScore++
        }
    }
}

function winner() {
    if (playerScore > compScore) {
        return "YOU WIN"
    } else if (playerScore < compScore) {
        return "YOU LOSE"
    } else if (playerScore == compScore) {
        return "TIE"
    }
}

game();

 let done = winner();

 console.log(done);
 

 


