let currentMark;
let gameBoard;
let winnerStatus = document.getElementById("winner")

function startGame() {
    showClearGameBoardButton();
    setUpGameBoard();
    createGameBoard();
    setTurn();
    createEventListeners();
}

function createEventListeners() {
    let rows = document.getElementById("gameBoard").children;
    
    for (let x = 0; x < rows.length; x++) {
        for (let y = 0; y < rows[x].children.length; y++) {
            rows[y].children[x].addEventListener("click", function () {
                if (checkWinner() === false) {
                    if (checkField(x, y) === true) {
                        makeMove(x, y);
                        rows[y].children[x].innerHTML = gameBoard[x][y];
                    }
                    checkWinner();
                }
            });
        }
    }
}

function createGameBoard() {
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
}

function makeMove(x, y) {
    gameBoard[x][y] = currentMark;
    setTurn();
}

function setTurn() {
    currentMark = currentMark === 'X' ? 'O' : 'X';
}

function checkField(x, y) {
    if (gameBoard[x][y] === '') {
        return true;
    }
}

function checkWinner() {
    let winnerStatus = document.getElementById("winner")

    if (
        (gameBoard[0][0] === 'X' && gameBoard[0][1] === 'X' && gameBoard[0][2] === 'X') ||
        (gameBoard[1][0] === 'X' && gameBoard[1][1] === 'X' && gameBoard[1][2] === 'X') ||
        (gameBoard[2][0] === 'X' && gameBoard[2][1] === 'X' && gameBoard[2][2] === 'X') ||
        (gameBoard[0][0] === 'X' && gameBoard[1][0] === 'X' && gameBoard[2][0] === 'X') ||
        (gameBoard[0][1] === 'X' && gameBoard[1][1] === 'X' && gameBoard[2][1] === 'X') ||
        (gameBoard[0][2] === 'X' && gameBoard[1][2] === 'X' && gameBoard[2][2] === 'X') ||
        (gameBoard[0][0] === 'X' && gameBoard[1][1] === 'X' && gameBoard[2][2] === 'X') ||
        (gameBoard[2][0] === 'X' && gameBoard[1][1] === 'X' && gameBoard[0][2] === 'X')) {
            winnerStatus.innerHTML = 'Player X is a winner';
            return true;
        }

    else if (
        (gameBoard[0][0] === 'O' && gameBoard[0][1] === 'O' && gameBoard[0][2] === 'O') ||
        (gameBoard[1][0] === 'O' && gameBoard[1][1] === 'O' && gameBoard[1][2] === 'O') ||
        (gameBoard[2][0] === 'O' && gameBoard[2][1] === 'O' && gameBoard[2][2] === 'O') ||
        (gameBoard[0][0] === 'O' && gameBoard[1][0] === 'O' && gameBoard[2][0] === 'O') ||
        (gameBoard[0][1] === 'O' && gameBoard[1][1] === 'O' && gameBoard[2][1] === 'O') ||
        (gameBoard[0][2] === 'O' && gameBoard[1][2] === 'O' && gameBoard[2][2] === 'O') ||
        (gameBoard[0][0] === 'O' && gameBoard[1][1] === 'O' && gameBoard[2][2] === 'O') ||
        (gameBoard[2][0] === 'O' && gameBoard[1][1] === 'O' && gameBoard[0][2] === 'O')) {
            winnerStatus.innerHTML = 'Player O is a winner';
            return true;
        }

    else if (
        (gameBoard[0][0] !== '' && gameBoard[0][1] !== '' && gameBoard[0][2] !== '') &&
        (gameBoard[1][0] !== '' && gameBoard[1][1] !== '' && gameBoard[1][2] !== '') &&
        (gameBoard[2][0] !== '' && gameBoard[2][1] !== '' && gameBoard[2][2] !== '')){
            winnerStatus.innerHTML = 'It\'s a draw!'
            return true
    }
    else {
        return false;
    }
}

function setUpGameBoard() {
    let board = document.getElementById("gameBoard");
    board.style.display = 'grid'; 
}

function clearGameBoard() {
    let winState = document.getElementById("winner");
    winState.innerHTML = '';

    let rowsToClear = document.getElementById("gameBoard").children;

    for (let x = 0; x < rowsToClear.length; x++){
        for (let y = 0; y < rowsToClear[x].children.length; y++){
            rowsToClear[y].children[x].innerHTML = '';
        }
    }
    startGame();
}

function showClearGameBoardButton(){
    let clearButton = document.getElementById("clearGameBoard");
    clearButton.style.display = 'inline-block';
}