let cpuMove;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach( (button) => {
    button.addEventListener('click', function(){
        playRound(button.id);
    });
});

const divResult = document.querySelector('#result');
divResult.setAttribute('style', 'white-space: pre;');

function computerPlay() {
    let cpuMoveNum = Math.ceil(Math.random() * 3);
    switch (cpuMoveNum) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
        default: return "Error";
    }        
}

function playRound(playerSelection) {
    computerSelection = computerPlay().toUpperCase();
    playerSelection = playerSelection.toUpperCase();

    divResult.textContent = `Computer got ${computerSelection}. You got ${playerSelection}.\r\n`;

    if (playerSelection == computerSelection) {
        divResult.textContent += "It's a tie! Try again!";
    } else if (playerSelection == "ROCK") {
        if(computerSelection == "PAPER") {
            computerScore += 1;
            divResult.textContent +=  "Paper covers Rock. You lose!";
        } else if (computerSelection == "SCISSORS") {
            playerScore += 1;
            divResult.textContent += "Rock crashes Scissors. You won!";
        }
    } else if (playerSelection == "PAPER") {
        if(computerSelection == "ROCK") {
            playerScore += 1;
            divResult.textContent += "Paper covers Rock. You won!";
        } else if (computerSelection == "SCISSORS") {
            computerScore += 1;
            divResult.textContent += "Scissors cut paper. You lose!";
        }
    } else if (playerSelection == "SCISSORS") {
        if(computerSelection == "PAPER") {
            playerScore += 1;
            divResult.textContent += "Scissors cut paper. You won!";
        } else if (computerSelection == "ROCK") {
            computerScore += 1;
            divResult.textContent += "Rock crashes Scissors. You lose!";
        }
    }  
}

function game(numberOfRounds = 1) {

    for (let i = 1; i <= numberOfRounds; i++){
        console.log("=== ROUND " + i + " ===");
        console.log(playRound(playerSelection, cpuMove));
    }

    if (playerScore > computerScore) {
        return "Congratulatioons! You won " + playerScore + ":" + computerScore + "!";
    } else if (playerScore < computerScore) {
        return "Oh sorrow! You lost " + computerScore + ":" + playerScore + "!";
    } else if (playerScore == computerScore) {
        return "Well, it's a tie. Score " + computerScore + ":" + playerScore + "!";
    }
}