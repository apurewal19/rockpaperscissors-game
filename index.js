let scorePlayer = 0;
let scoreComputer = 0;

const options = ["rock", "paper", "scissors"];

const rockButton = document.querySelector(".button-rock");
const paperButton = document.querySelector(".button-paper");
const scissorsButton = document.querySelector(".button-scissors");
const outcome = document.querySelector(".outcome");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");

const p = document.createElement('p');
const h3 = document.createElement('h3');
const restartButton = document.createElement("button");
restartButton.id = 'restart-button';

rockButton.addEventListener('click', () => {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    updateScores(scorePlayer,scoreComputer);
    roundOutcome(scorePlayer,scoreComputer);
})

paperButton.addEventListener('click', () => {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    updateScores(scorePlayer,scoreComputer);
    roundOutcome(scorePlayer,scoreComputer);
})

scissorsButton.addEventListener('click', () => {
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    updateScores(scorePlayer,scoreComputer);
    roundOutcome(scorePlayer,scoreComputer);
})

restartButton.addEventListener('click', () => {
    restartGame();
})

/*
restartButton.addEventListener('click', () => {
    scoreComputer = 0;
    scorePlayer = 0;
    document.querySelector(".player-score").innerText = "Player: ";
    document.querySelector(".computer-score").innerText = "Computer: ";
})
*/

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound (playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        p.innerText = "It's a tie";
    } else if (result == "Player") {
        p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`; 
        scorePlayer++
    } else {
        p.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
        scoreComputer++
    }
    outcome.appendChild(p);
}

/*
function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock Paper Scissors");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}
*/

function roundOutcome(scorePlayer,scoreComputer) {
    if (scorePlayer === 5) {
        h3.classList.add('player-won')
        h3.innerText = `You Won! - Player: ${scorePlayer} Computer: ${scoreComputer}`
        outcome.removeChild(p);
        outcome.append(h3);
        restartButton.innerText = `Play Again?`;
        outcome.append(restartButton);
    } 
    
    if (scoreComputer === 5) {
        h3.classList.add('computer-won')
        h3.innerText = `You Lost! - Player: ${scorePlayer} Computer: ${scoreComputer}`
        outcome.removeChild(p);
        outcome.append(h3);
        restartButton.innerText = `Play Again?`;
        outcome.append(restartButton);
    }
}

function updateScores (scorePlayer,scoreComputer) {
    playerScoreSpan.innerHTML = `Player: ${scorePlayer}`
    computerScoreSpan.innerHTML = `Computer: ${scoreComputer}`
}

function restartGame () {
    scorePlayer = 0;
    scoreComputer = 0;
    playerScoreSpan.innerHTML = 'Player: ';
    computerScoreSpan.innerHTML = 'Computer: ';
}

/*
function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;

    console.log ("Welcome");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log ("-------------");
        console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection,computerSelection)) {
            scorePlayer ++;
        } else if (checkWinner(playerSelection, computerSelection)) {
            scoreComputer ++;
        }
    }
    console.log ("Game over");
    if (scorePlayer > scoreComputer) {
        console.log ("Player wins the game");
    } else if (scorePlayer < scoreComputer) {
        console.log ("Computer wins the game");
    } else {
        console.log ("We have a tie");
    }
}

 game();
*/


