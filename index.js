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
    restartButton.style.display = 'none';
    playerSelection = "none";
    computerSelection = "none";
    updateScores(scorePlayer,scoreComputer);
    roundOutcome(scorePlayer,scoreComputer);
})


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
    h3.innerText = '';
    p.innerText = '';
}
