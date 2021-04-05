function computerPlay(max) {
    return Math.floor(Math.random() * Math.floor(max));
 };
 
 
 function trans(num) {
     if (num == 0) {
         return "Rock";
     } else if (num == 1) {
         return "Scissors";
     } else if (num == 2) {
         return "Paper";
     }
 }
 
 
 let z = " ";
 let y = " ";
 let x = " ";
 let s = " ";
 
 function playRound(playerSelection, computerSelection) {

     console.log("You chose " + trans(playerSelection));
     console.log("Computer chose " + trans(computerSelection));
      z = trans(playerSelection);
      x = trans(computerSelection);
     if (playerSelection == computerSelection) {
         y = ("This Round Is A Draw");
         console.log(y);
         return y;
     } else if ((playerSelection == 1 && computerSelection == 0) || (playerSelection == 0 && computerSelection == 2) || (playerSelection == 2 && computerSelection == 1)) {
        y = (x + ' ' + "Beats" + ' ' + trans(playerSelection) + '. ' + "Computer Wins");
        console.log(y);
        return y
     } else if ((playerSelection == 0 && computerSelection == 1) || (playerSelection == 2 && computerSelection == 0) || (playerSelection == 1 && computerSelection == 2)) {
         y = (trans(playerSelection) + ' ' + "Beats" + ' ' + x + '. ' + "Player Wins");
         console.log(y);
         return y;
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
 
 let score = 0;
 let compScore = 0;
 let playerScore = 0;
 let newChoice = 2;

 function game() { 
       if (y.includes("Computer Wins")) {
           compScore++;
           score++;
           console.log(score);
       } else if (y.includes("Player Wins")) {
           playerScore++
           score++
           console.log(score);
       } else {
           score++
       }
    }

function fuck() {
    if ((score >= 5) && (playerScore > compScore)) {
        let gameOver = document.getElementById("game-over");
    gameOver.innerHTML = "You Win";
    } else if ((score >= 5) && (playerScore < compScore)) {
        let gameOver = document.getElementById("game-over");
        gameOver.innerHTML = "You Lose";
    }
}

function check() {
    if (score <= 5) {
        update();
    }
}

 let rock = document.getElementById("rock");
rock.onclick = function() {
    let newChoice = 0;
   let a =  playRound(newChoice, computerPlay(3));
   let g = game();
   let b = check();
   let o = fuck();
   return
};


let scissors = document.getElementById("scissors");
scissors.onclick = function() {
    let newChoice = 1;
    let a =  playRound(newChoice, computerPlay(3));
    let g = game();
    let b = check();
    let o = fuck();
    return
};


let paper = document.getElementById("paper");
paper.onclick = function() {
    let newChoice = 2;
    let a =  playRound(newChoice, computerPlay(3));
    let g = game();
    let b = check();
    let o = fuck();
    return
};








 /*back end finish*/



 /*
let yourChoice = document.querySelectorAll('#your-choice');
console.log(yourChoice);
yourChoice.innerHTML = '<h2> Rock </h2>'
console.log(yourChoice);
*/

function update() {
    let yourChoice = document.getElementById("your-choice");
yourChoice.innerHTML = z + ' VS ' + x;

let results = document.getElementById("result-text");
results.innerHTML = y;

let gameOver = document.getElementById("game-over");
    gameOver.innerHTML = s;

};




