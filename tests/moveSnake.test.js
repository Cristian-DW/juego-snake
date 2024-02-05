// Runnable unit tests in JavaScript

// Test for moving the snake to a new valid square
test('moveSnake - mover a un nuevo cuadro válido', () => {
   // Configurar el estado inicial
   snake = ['010', '011'];
   directions = { arrowRight: 1 };
   boardSize = 10;
   boardSquares = [
     ['emptySquare', 'emptySquare', 'foodSquare', 'emptySquare', 'emptySquare', 'emptySquare', 'emptySquare', 'emptySquare', 'emptySquare', 'emptySquare'],
     // Agregar más filas según sea necesario
   ];
 
   // Llamar a la función
   moveSnake();
 
   // Afirmar el resultado esperado
   expect(snake).toEqual(['010', '011', '012']);
 });
 
 // Test for game over when the snake moves out of bounds
 test('moveSnake - fin del juego cuando la serpiente se sale de los límites', () => {
   // Configurar el estado inicial
   snake = ['009'];
   directions = { arrowRight: 1 };
   boardSize = 10;
   boardSquares = [
     // Agregar configuración de boardSquares según sea necesario
   ];
 
   // Llamar a la función
   moveSnake();
 
   // Afirmar el resultado esperado
   expect(gameOver).toHaveBeenCalled();
 });
 
 // Test for adding food when the snake moves onto a food square
 test('moveSnake - añadir comida cuando la serpiente se mueve a un cuadro de comida', () => {
   // Configurar el estado inicial
   snake = ['010'];
   directions = { arrowRight: 1 };
   boardSize = 10;
   boardSquares = [
     ['emptySquare', 'emptySquare', 'foodSquare', 'emptySquare', 'emptySquare', 'emptySquare', 'emptySquare', 'emptySquare', 'emptySquare', 'emptySquare'],
     // Agregar más filas según sea necesario
   ];
 
   // Llamar a la función
   moveSnake();
 
   // Afirmar el resultado esperado
   expect(addFood).toHaveBeenCalled();
 });
 
 