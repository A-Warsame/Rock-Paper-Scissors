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
        return result = "Draw";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win. Computer chose ${computerChoice}`);
        humanScore++;
        return result = "You Win";
    } else {
        console.log(`You lose... Computer chose ${computerChoice}`);
        computerScore++;
        return result = "You Lose";
    }
}

function updateScores() {
    const resultElement = document.querySelector('#result');
    const scoreElement = document.querySelector('#scores');
    // scoreElement.textContent = `You ${result}`;
    resultElement.textContent = `${result}`;
    scoreElement.textContent = `You ${humanScore} - ${computerScore} Computer`;}

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

