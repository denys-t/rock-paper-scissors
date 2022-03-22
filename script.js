let cpuMove = computerPlay();
let playerMove = playerPlay();

playRound(playerMove, cpuMove);

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
    let playerMoveLtr = window.prompt("Choose your move: R = rock, P = paper, S = scissors");
    playerMoveLtr = playerMoveLtr[0].toUpperCase();
    switch (playerMoveLtr) {
        case "R": return "Rock";
        case "P": return "Paper";
        case "S": return "Scissors";
        default: return "Error";
    }        
}

function playRound(playerSelection, computerSelection) {
    let endGame = false;

    while (!endGame) {
        console.log("Computer got " + cpuMove);
        console.log("You got " + playerMove);

        if (playerMove == cpuMove) {
            console.log("It's a tie! Try again");
            cpuMove = computerPlay();
            playerMove = playerPlay();
        } else if (playerMove == "Rock") {
            if(cpuMove == "Paper") {
                console.log("Paper covers Rock. You lose!");
                endGame = true;
            } else if (cpuMove == "Scissors") {
                console.log("Rock crashes Scissors. You won!");
                endGame = true;
            }
        } else if (playerMove == "Paper") {
            if(cpuMove == "Rock") {
                console.log("Paper covers Rock. You won!");
                endGame = true;
            } else if (cpuMove == "Scissors") {
                console.log("Scissors cut paper. You lose!");
                endGame = true;
            }
        } else if (playerMove == "Scissors") {
            if(cpuMove == "Paper") {
                console.log("Scissors cut paper. You won!");
                endGame = true;
            } else if (cpuMove == "Rock") {
                console.log("Rock crashes Scissors. You lose!");
                endGame = true;
            }
        }
    }    
}