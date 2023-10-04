//your JS code here. If required.
// Variables to track game state
let currentPlayer = 1;
let player1Name, player2Name;
let gameOver = false;

// Function to handle cell click
function handleCellClick(event) {
    const cell = event.target;
    if (!cell.textContent && !gameOver) {
        cell.textContent = currentPlayer === 1 ? 'X' : 'O';
        checkWin();
        togglePlayer();
    }
}

// Function to toggle between players
function togglePlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    const message = document.querySelector('.message');
    message.textContent = `${currentPlayer === 1 ? player1Name : player2Name}, you're up!`;
}

// Function to check for a win
function checkWin() {
    const cells = document.querySelectorAll('.cell');
    const winPatterns = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
        [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
        [1, 5, 9], [3, 5, 7] // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a - 1].textContent && cells[a - 1].textContent === cells[b - 1].textContent && cells[a - 1].textContent === cells[c - 1].textContent) {
            const message = document.querySelector('.message');
            message.textContent = `${currentPlayer === 1 ? player1Name : player2Name}, congratulations you won!`;
            gameOver = true;
            break;
        }
    }
}

// Function to start the game
function startGame() {
    player1Name = document.getElementById('player-1').value;
    player2Name = document.getElementById('player-2').value;
    const inputContainer = document.querySelector('.input-container');
    inputContainer.style.display = 'none';

    const cells = document.querySelectorAll('.cell');
    for (const cell of cells) {
        cell.addEventListener('click', handleCellClick);
    }

    togglePlayer();
}

// Event listener for the Submit button
document.getElementById('submit').addEventListener('click', startGame);
