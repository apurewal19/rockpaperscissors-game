let scorePlayer = 0;
let scoreComputer = 0;

const rockButton = document.querySelector(".button-rock");
const paperButton = document.querySelector(".button-paper");
const scissorsButton = document.querySelector(".button-scissors");
const options = ["rock", "paper", "scissors"];
const outcome = document.querySelector(".outcome");
const p = document.createElement('p');

rockButton.addEventListener('click', () => {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
})

paperButton.addEventListener('click', () => {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
})

scissorsButton.addEventListener('click', () => {
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
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
        outcome.appendChild(p);
    } else if (result == "Player") {
        p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`; 
        outcome.appendChild(p);
    } else {
        p.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
        outcome.appendChild(p);
    }
}

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

//function game() {
//    let scorePlayer = 0;
//    let scoreComputer = 0;
//
//    console.log ("Welcome");
//    for (let i = 0; i < 5; i++) {
//        const playerSelection = getPlayerChoice();
//        const computerSelection = getComputerChoice();
//        console.log ("-------------");
//        console.log(playRound(playerSelection, computerSelection));
//        if (checkWinner(playerSelection,computerSelection)) {
//            scorePlayer ++;
//        } else if (checkWinner(playerSelection, computerSelection)) {
//            scoreComputer ++;
//        }
//    }
//    console.log ("Game over");
//    if (scorePlayer > scoreComputer) {
//        console.log ("Player wins the game");
//    } else if (scorePlayer < scoreComputer) {
//        console.log ("Computer wins the game");
//    } else {
//        console.log ("We have a tie");
//    }
//}
//
// game();



