let cpuMove = computerPlay();
let playerMove = playerPlay();

console.log(cpuMove);
console.log(playerMove);

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
    let playerMoveLtr = window.prompt("Choose your move: R = rock, P = paper, S = scissors").toUpperCase();
    switch (playerMoveLtr) {
        case "R": return "Rock";
        case "P": return "Paper";
        case "S": return "Scissors";
        default: return "Error";
    }        
}

function playRound(playerSelection, computerSelection) {

}