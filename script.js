let cpuMove;
let playerScore = 0;
let computerScore = 0;

const buttonsPlayer = document.querySelectorAll('button[data-type=player]');
buttonsPlayer.forEach( (button) => {
    button.addEventListener('click', function(){
        playRound(button.id);
    });
    button.classList.add('button-hover');
});

const buttonsComputer = document.querySelectorAll('button[data-type=computer]');

const buttonContinueGame = document.querySelector('#continue-game');
buttonContinueGame.addEventListener('click', function(){
    newRound(buttonContinueGame);
});

const buttonNewGame = document.querySelector('#new-game');
buttonNewGame.addEventListener('click', function(){
    newRound(buttonNewGame);
});

const divResult = document.querySelector('#result');

function computerPlay() {
    let cpuMoveNum = Math.ceil(Math.random() * 3);
    switch (cpuMoveNum) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
        default: return "Error";
    }        
}

function playRound(playerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        divResult.textContent += "It's a tie! Try again!";
    } else if (playerSelection == "rock") {
        if(computerSelection == "paper") {
            computerScore += 1;
            divResult.textContent +=  "Paper covers Rock. You lose!";
        } else if (computerSelection == "scissors") {
            playerScore += 1;
            divResult.textContent += "Rock crashes Scissors. You won!";
        }
    } else if (playerSelection == "paper") {
        if(computerSelection == "rock") {
            playerScore += 1;
            divResult.textContent += "Paper covers Rock. You won!";
        } else if (computerSelection == "scissors") {
            computerScore += 1;
            divResult.textContent += "Scissors cut paper. You lose!";
        }
    } else if (playerSelection == "scissors") {
        if(computerSelection == "paper") {
            playerScore += 1;
            divResult.textContent += "Scissors cut paper. You won!";
        } else if (computerSelection == "rock") {
            computerScore += 1;
            divResult.textContent += "Rock crashes Scissors. You lose!";
        }
    }
    
    showResult(playerSelection, computerSelection);
    checkEndGame();
}

function checkEndGame() {

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            divResult.textContent += `\r\nCongratulatioons! You won!`;
        } else if (playerScore < computerScore) {
            divResult.textContent += `\r\nWell, the machine is smarter. You lost.`;
        }

        buttonNewGame.toggleAttribute('hidden');

        playerScore = 0;
        computerScore = 0;
    } else {
        buttonContinueGame.toggleAttribute('hidden');
    }
}

function showResult(playerSelection, computerSelection){
    buttonsComputer.forEach((button) => {
        if (button.id == computerSelection + '-c') button.toggleAttribute('hidden');
    });

    buttonsPlayer.forEach((button) => {
        button.toggleAttribute('disabled');
        button.classList.remove('button-hover');
        if (button.id != playerSelection) button.toggleAttribute('hidden');
    });

    divResult.textContent = `${playerScore} : ${computerScore}`; 
}

function newRound(btn) {
    buttonsComputer.forEach((button) => {
        button.setAttribute('hidden', 'true');
    });

    buttonsPlayer.forEach((button) => {
        button.removeAttribute('disabled');
        button.removeAttribute('hidden');
        button.classList.add('button-hover');
    });

    buttonNewGame.setAttribute('hidden', 'true');
    buttonContinueGame.setAttribute('hidden', 'true');
    
    if (btn.id == "new-game") divResult.textContent = "0 : 0";
}