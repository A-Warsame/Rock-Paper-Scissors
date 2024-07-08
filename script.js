const moves = ['r','p','s'];
const lowerCaseMoves = moves.map(move => move.toLowerCase());
let humanScore = 0;
let computerScore = 0;

function getComputerMove() {
    let randomMove = lowerCaseMoves[Math.floor(lowerCaseMoves.length * Math.random())];
    return randomMove
}

function getHumanChoice() {
    let humanMove = prompt("Choose your move (r, p, s): ");
    
    if (moves.includes(humanMove)) {
        return humanMove;
    } else {
        console.log("Use a valid move (r, p, s)");
        return getHumanChoice(); 
    }
}
