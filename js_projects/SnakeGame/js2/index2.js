// Constants
let direction = {x: 0,y:0};
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound  = new Audio('music.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x:13,y:15}
]
food = {
    x:6,y:7
}

//game Functions
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime - lastPaintTime)/1000<1/speed){
    return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function gameEngine(){
    // Part1: Updating the snake arrary 
    // Part2: Display the snake


    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add('head');
        }
        snakeElement.classList.add('snake');
        board.appendChild(snakeElement);
    }
);
    // Part3: Display the food
    snakeArr.forEach((e, index)=>{
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = e.y;
        foodElement.style.gridColumnStart = e.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);
    }
);


}

//main Logic
window.requestAnimationFrame(main)
