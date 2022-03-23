let cpuMove;
let playerMove;
let playerScore = 0;
let computerScore = 0;

console.log(game(5));

function computerPlay() {
    let cpuMoveNum = Math.ceil(Math.random() * 3);
    switch (cpuMoveNum) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
        default: return "Error";
    }        
}

function playerPlay() {

    while (true) {
        let playerMoveLtr = window.prompt("Choose your move: R = rock, P = paper, S = scissors");
            if (playerMoveLtr != null && playerMoveLtr.length > 0) {
                playerMoveLtr = playerMoveLtr[0].toUpperCase();
            }

        switch (playerMoveLtr) {
            case "R": 
                return "Rock";
            case "P": 
                return "Paper";
            case "S": 
                return "Scissors";
            default:
                console.log("Error, try again");
        }
    }        
}

function playRound(playerSelection, computerSelection) {
    let endGame = false;

    while (!endGame) {
        cpuMove = computerPlay();
        playerMove = playerPlay();

        console.log("Computer got " + cpuMove);
        console.log("You got " + playerMove);

        if (playerMove == cpuMove) {
            return "It's a tie! Try again";
        } else if (playerMove == "Rock") {
            if(cpuMove == "Paper") {
                return "Paper covers Rock. You lose!";
                computerScore += 1;
                endGame = true;
            } else if (cpuMove == "Scissors") {
                return "Rock crashes Scissors. You won!";
                playerScore += 1;
                endGame = true;
            }
        } else if (playerMove == "Paper") {
            if(cpuMove == "Rock") {
                return "Paper covers Rock. You won!";
                playerScore += 1;
                endGame = true;
            } else if (cpuMove == "Scissors") {
                return "Scissors cut paper. You lose!";
                computerScore += 1;
                endGame = true;
            }
        } else if (playerMove == "Scissors") {
            if(cpuMove == "Paper") {
                return "Scissors cut paper. You won!";
                playerScore += 1;
                endGame = true;
            } else if (cpuMove == "Rock") {
                return "Rock crashes Scissors. You lose!";
                computerScore += 1;
                endGame = true;
            }
        }
    }    
}

function game(numberOfRounds = 1) {

    for (let i = 1; i <= numberOfRounds; i++){
        console.log("=== ROUND " + i + " ===");
        console.log(playRound(playerMove, cpuMove));
    }

    if (playerScore > computerScore) {
        return "Congratulatioons! You won " + playerScore + ":" + computerScore + "!";
    } else if (playerScore < computerScore) {
        return "Oh sorrow! You lost " + computerScore + ":" + playerScore + "!";
    } else if (playerScore == computerScore) {
        return "Well, it's a tie. Score " + computerScore + ":" + playerScore + "!";
    }
}