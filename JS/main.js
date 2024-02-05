const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const startButton = document.getElementById('start');
const gameOverSign = document.getElementById('gameOver');

const foodColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];


// Configuración del juego

const boardSize = 10;
const gameSpeed = 200;
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

// Variables del juego
let snake, score, direction, boardSquares, emptySquares, moveInterval;

const drawSnake = () => {
  snake.forEach(square => drawSquare(square, 'snakeSquare'));
}

// rellenar cada cuadrado del tablero 
//@params
//square: posicion del cuadrado
//type: tipo de cuadrado (emptySquare, snakeSquare, foodSquare)
const drawSquare = (square, type, color) => {
  const [row, column] = square.split('');
  boardSquares[row][column] = squareTypes[type];
  const squareElement = document.getElementById(square);
  squareElement.setAttribute('class', `square ${type}`);
  
  if (color) {
    squareElement.style.backgroundColor = color;
  } else {
    squareElement.style.backgroundColor = ''; // Limpiar el color si no se proporciona
  }

  if (type === 'emptySquare') {
    emptySquares.push(square);
  } else {
    if (emptySquares.indexOf(square) !== -1) {
      emptySquares.splice(emptySquares.indexOf(square), 1);
    }
  }
};


const moveSnake = () => {
  const newSquare = String(
    Number(snake[snake.length - 1]) + directions[direction]
  ).padStart(2, '0');
  const [row, column] = newSquare.split('');

  if (
    newSquare < 0 ||
    newSquare >= boardSize * boardSize ||
    (direction === 'arrowRight' && column == 0) ||
    (direction === 'arrowLeft' && column == 9) ||
    boardSquares[row][column] === squareTypes.snakeSquare
  ) {
    gameOver();
  } else {
    snake.push(newSquare);

    if (boardSquares[row][column] === squareTypes.foodSquare) {
      addFood();
    } else {
      const emptySquare = snake.shift();
      drawSquare(emptySquare, 'emptySquare');
    }

    drawSnake();
  }
};

    const addFood = () => {
      score ++;
      updateScore();
      creaRandomFood();
    }

  const gameOver = () => {
    clearInterval(moveInterval);
    startButton.disabled = false;
    gameOverSign.style.display = 'block';
  }

const setDirection = newDirection => {
  direction = newDirection
}

const directionEvent = key => {
  switch (key.code) {
    case 'ArrowUp':
      direction !== 'arrowDown' && setDirection('arrowUp');
      break;
    case 'ArrowDown':
      direction !== 'arrowUp' && setDirection('arrowDown');
      break;
    case 'ArrowLeft':
      direction !== 'arrowRight' && setDirection('arrowLeft');
      break;
    case 'ArrowRight':
      direction !== 'arrowLeft' && setDirection('arrowRight');
      break;
  }
}

const creaRandomFood = () => {
  const randomSquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
  const randomColor = foodColors[Math.floor(Math.random() * foodColors.length)];
  drawSquare(randomSquare, 'foodSquare', randomColor);
};



const updateScore = () => {
  scoreBoard.innerText = score;
}

/**
+ * Crea el tablero del juego generando y agregando elementos de cuadrado al tablero.
+ */
const createBoard = () => {
  boardSquares.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      const squareValue = `${rowIndex}${columnIndex}`;
      const squareElement = document.createElement('div');
      squareElement.setAttribute('class', 'square emptySquare');
      squareElement.setAttribute('id', squareValue);
      board.appendChild(squareElement);
      emptySquares.push(squareValue);
    });
  });
};


/**
+ * Reinicia el estado del juego y crea un nuevo tablero de juego.
+ */
const setGame = () => {
  snake = ['00', '01', '02'];
  score = snake.length;
  direction = 'arrowRight';
  boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquare));
  board.innerHTML = '';
  emptySquares = [];
  createBoard();
  creaRandomFood();
  document.addEventListener('keydown', directionEvent);
  moveInterval = setInterval(() => moveSnake(), gameSpeed);
};


/**Inicia el juego configurando el estado inicial, ocultando el cartel de fin de juego,
deshabilitando el botón de inicio, dibujando la serpiente y actualizando el puntaje.
*/
const startGame = () => {
  setGame();
  gameOverSign.style.display = 'none';
  startButton.disabled = true;
  drawSnake();
  updateScore();
};

startButton.addEventListener('click', startGame);
