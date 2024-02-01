// Nombre del test: drawSnake should call drawSquare for each snake segment

test('drawSnake calls drawSquare for each segment in the snake array', () => {
   // Arrange
   const snake = [1, 2, 3];
   const drawSquare = jest.fn();
 
   // Act
   drawSnake(snake, drawSquare);
 
   // Assert
   expect(drawSquare).toHaveBeenCalledTimes(3);
   expect(drawSquare).toHaveBeenCalledWith(1, 'snakeSquare');
   expect(drawSquare).toHaveBeenCalledWith(2, 'snakeSquare');
   expect(drawSquare).toHaveBeenCalledWith(3, 'snakeSquare');
 });
 