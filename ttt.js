// let b=document.querySelector(".box");
// const btn=(e)=>{
//     let b=document.querySelector(".box");
//     b.style.transform="scale(1,1)";
// };
// b.addEventListener("click",btn);
let buttons = document.querySelectorAll('.cell');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        button.style.transform = "scale(1,1)";
    });
});
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset-button');

let currentPlayer = 'X';
let board = Array(9).fill(null);
let gameActive = true;

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWin() {
    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return board.includes(null) ? null : 'Tie';
}

function handleClick(event) {
    if (!gameActive) return;
    const index = event.target.dataset.index;
    if (board[index] || !event.target.classList.contains('cell')) return;

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    const winner = checkWin();
    if (winner) {
        gameActive = false;
        message.textContent = winner === 'Tie' ? "It's a Tie!" : `${winner} Wins!`;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}
function resetGame() {
    board = Array(9).fill(null);
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.transform = ""; 
    });
    message.textContent = '';
    currentPlayer = 'X';
    gameActive = true;
}

// function resetGame() {
//     board = Array(9).fill(null);
//     cells.forEach(cell => cell.textContent = '');
//     buttons.style.transform = "scale(1, 1)";
//     message.textContent = '';
//     currentPlayer = 'X';
//     gameActive = true;
// }

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);