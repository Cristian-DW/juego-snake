const board = document.getElementById('board');
const scoreBoard = document.getElementById('score');
const startButton = document.getElementById('start');
const gameOverSign = document.getElementById('gameOver');

// game settingns

const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
   emptySquare: 0,
   snakeSquare: 1,
   foodSquare: 2
};

const directions = {
   arrowUp: -10,
   arrowDown: 10,
   arrowLeft: -1,
   arrowRight: 1
};

// game variables
let snake, score, direction, boardSquares, emptySquares, moveInterval;

const createBoard = () => {
   boardSquares.forEach((row, rowIndex) => {
      row.forEach((column, columnIndex) => {
         const squareIndex = `${rowIndex}${columnIndex}`;
         const squareElement = document.createElement('div');
         squareElement.setAttribute('class', 'square emptySquare');
         squareElement.setAttribute('id', squareValue);
         board.appendChild(squareElement);
         emptySquares.push(squareValue);
      })
      
   });
};

const setGame = () => {
   snake = [ '00', '01', '02', '03' ];
   score = snake.length;
   direction = 'arrowRight';
   boardSquares = array.from(array(boardSize), () => new array(boardSize).fill(squareTypes.emptySquare));
   board.innerHTML = '';
   emptySquares = [];
   createBoard();
}

const startGame = () => {
   setGame();
}

startButton.addEventListener('click', startGame);

