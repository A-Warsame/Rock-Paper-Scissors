const moves = ['rock', 'paper', 'scissors'];
const lowerCaseMoves = moves.map(move => move.toLowerCase());
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomMove = lowerCaseMoves[Math.floor(lowerCaseMoves.length * Math.random())];
    return randomMove;
}

function getHumanChoice() {
    let humanMove = prompt("Choose your move (rock, paper, scissors): ").toLowerCase();
    
    if (lowerCaseMoves.includes(humanMove)) {
        return humanMove;
    } else {
        console.log("Use a valid move (rock, paper, scissors)");
        return getHumanChoice(); 
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Draw. Computer chose ${computerChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        // console.log(`You win. Computer chose ${computerChoice}`);
        humanScore++;
    } else {
        // console.log(`You lose... Computer chose ${computerChoice}`);
        computerScore++;
    }
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

playGame();