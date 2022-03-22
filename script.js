let cpuMove = computerPlay();

console.log(cpuMove);

function computerPlay() {
    let cpuMoveNum = Math.ceil(Math.random() * 3);
    switch (cpuMoveNum) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
        default: return "Error";
    }        
}