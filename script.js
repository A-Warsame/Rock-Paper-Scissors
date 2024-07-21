const moves = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomMove = moves[Math.floor(moves.length * Math.random())];
    return randomMove;
}

function getHumanChoice(selectedButton) {
    return selectedButton.toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log(`Draw. Computer chose ${computerChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win. Computer chose ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose... Computer chose ${computerChoice}`);
        computerScore++;
    }
}

function updateScores() {
    console.log(`Current Scores - Human: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {    
    let round = 1;

    while (round <= 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Round ${round} - Human ${humanScore} : ${computerScore} Computer`);
        round++;
    }

    console.log(`Final score \nHuman ${humanScore} : ${computerScore} Computer`);
}

// playGame();

const buttons = document.querySelectorAll('button');
let selectedButton = null;

buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        const humanChoice = getHumanChoice(event.target.textContent);
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        updateScores();
    });
});

