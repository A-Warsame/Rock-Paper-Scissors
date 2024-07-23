const moves = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
    return moves[Math.floor(Math.random() * moves.length)];
}

function playRound(humanChoice, computerChoice) {
    if (gameOver) return;

    if (humanChoice === computerChoice) {
        return "Draw";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        checkGameOver();
        return "You Win";
    } else {
        computerScore++;
        checkGameOver();
        return "You Lose";
    }
}

function checkGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        gameOver = true;
        displayFinalResult();
    }
}

function updateScores(result) {
    const resultElement = document.querySelector('#result');
    const humanScoreElement = document.querySelector('#humanScore');
    const computerScoreElement = document.querySelector('#computerScore');

    resultElement.textContent = result;
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
}

function displayFinalResult() {
    const finalResultElement = document.querySelector('#finalResult');
    if (humanScore === 5) {
        finalResultElement.textContent = "Congratulations! You won the game!";
    } else {
        finalResultElement.textContent = "Sorry, you lost the game. Better luck next time!";
    }
}

const buttons = document.querySelectorAll('.choice');
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        const humanChoice = this.id;
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        updateScores(result);
    });
});