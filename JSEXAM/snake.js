const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');

const boxSize = 20;
const canvasSize = 20;
const snake = [];
snake[0] = { x: 10, y: 10 };

var food = {
    x: Math.floor(Math.random() * canvasSize),
    y: Math.floor(Math.random() * canvasSize)
};

var dX = 0;
var dY = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? 'green' : 'white';
        ctx.fillRect(snake[i].x * boxSize, snake[i].y * boxSize, boxSize, boxSize);
    }

    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * boxSize, food.y * boxSize, boxSize, boxSize);

    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

    snakeX += dX;
    snakeY += dY;

    if (snakeX < 0) 
    snakeX = canvasSize - 1;
    if (snakeX >= canvasSize)
     snakeX = 0;
    if (snakeY < 0) 
    snakeY = canvasSize - 1;
    if (snakeY >= canvasSize)
     snakeY = 0;

    const newHead = { x: snakeX, y: snakeY };
    snake.unshift(newHead);

    if (snakeX === food.x && snakeY === food.y) {
        food = {
            x: Math.floor(Math.random() * canvasSize),
            y: Math.floor(Math.random() * canvasSize)
        };
    } else {
        snake.pop();
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && dX !== 1) {
        dX = -1;
        dY = 0;
    } else if (event.key === 'ArrowRight' && dX !== -1) {
        dX = 1;
        dY = 0;
    } else if (event.key === 'ArrowUp' && dY !== 1) {
        dX = 0;
        dY = -1;
    } else if (event.key === 'ArrowDown' && dY !== -1) {
        dX = 0;
        dY = 1;
    }
});

setInterval(draw, 100);