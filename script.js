const moves = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
    let randomMove = moves[Math.floor(moves.length * Math.random())];
    return randomMove;
}

function getHumanChoice(selectedButton) {
    return selectedButton.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (gameOver) return; // Prevent further rounds if the game is over

    if (humanChoice === computerChoice) {
        console.log(`Draw. Computer chose ${computerChoice}`);
        return "Draw";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win. Computer chose ${computerChoice}`);
        humanScore++;
        checkGameOver();
        return "You Win";
    } else {
        console.log(`You lose... Computer chose ${computerChoice}`);
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
    const scoreElement = document.querySelector('#scores');
    resultElement.textContent = result;
    scoreElement.textContent = `You ${humanScore} - ${computerScore} Computer`;
}

function displayFinalResult() {
    const finalResultElement = document.querySelector('#finalResult');
    if (humanScore === 5) {
        finalResultElement.textContent = "Congratulations! You won the game!";
    } else {
        finalResultElement.textContent = "Sorry, you lost the game. Better luck next time!";
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        const humanChoice = getHumanChoice(event.target.textContent);
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        updateScores(result);
    });
});
