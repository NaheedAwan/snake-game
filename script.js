console.log("hello world")

// defining variables
let inputDirection = { x: 0, y: 0 };
// const foodSound = new Audio('.food.mp3');
// const moveSound = new Audio('.move.mp3');
let speed = 2;
let lastPaintTime = 0;
// snake is array as its going to have many parts
let snakeArr = [
  { x: 13, y: 15 }
]
// food is only one particle thats why its not array
let food =
  { x: 6, y: 8 }
// _______________________________________________________________________________________________________________________________________-
// calling function current time 

function main(ctime) {
  window.requestAnimationFrame(main)
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime
  gameEngine();

  // console.log(ctime)

}
// ____________________________________________________________________________________________________________________________________
function isCollide(sarr) {
  return false;
}
function gameEngine() {
//   // part 1: updating snake array and food

  if (isCollide(snakeArr)) {
    // gameOverSound.play();
    // musicSund.pause();
    inputDirection = { x: 0, y: 0 };
    alert("Game over press any key to play again");
    snakeArr = [{ x: 13, y: 15 }];
    // musicSound.play();
    score = 0;

   }
  // If you have eaten the food .1. icrement the score and .2.regenerate the food
  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    snakeArr.unshift({ x: snakeArr[0].x + inputDirection.x, x: snakeArr[0].y + inputDirection.y })
    let a = 2;
    let b = 16;

    food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
  }
  // moving snake
  for (let i = snakeArr.length - 2; i >= 0; i--) {
    const element = array[i];
    // moving last piece to 2nd last piece position and so on 
    // destructing{...} creating new object just to avoid refrencing error
    snakeArr[i + 1] = { ...snakeArr[i] }

  }
  // moving snake head
  snakeArr[0].x += inputDirection.x
  snakeArr[0].y += inputDirection.y
        // ------------------------------------------------------------------------------------
  // part 2: display the snake and food 

  // displayin snake(head and body(snake))
  // adding dots to snake tail
  gameBoard.innerHTML = "";//clearing gameboard

  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div")
    // adding dots to rows or column
    snakeElement.style.gridRowStart = e.y
    snakeElement.style.gridColumnStart = e.x
    snakeElement.classList.add('snake')
    if (index === 0) {
      snakeElement.classList.add('head')
    } else {
      snakeElement.classList.add('snake')
    }
    gameBoard.appendChild(snakeElement)
  })
  //  displaying food
  foodElement = document.createElement("div")
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)

}



// _______________________________________________________________________________________________________________________________________
// Main logic
window.requestAnimationFrame(main)
// by pressing any key an event will be fired
window.addEventListener('keydown', e => {
  inputDirection = { x: 0, y: 0 }
  // moveSound.play()
  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp")
      inputDirection.x = 0;
      inputDirection.y = -1;

      break;
    case "ArrowDown":
      console.log("ArrowDown")
      inputDirection.x = 0;
      inputDirection.y = 1;
      break;

    case "ArrowRight":
      console.log("ArrowRight")
      inputDirection.x = 1;
      inputDirection.y = 0;
      break;
    case "ArrowLeft":
      console.log("ArrowLeft")
      inputDirection.x = -1;
      inputDirection.y = 0;
      break;

    default:
      break;
  }

})








// let reqAnim, characterPosition;
// function animate() {

//   characterPosition.x += 5;
//   characterPosition.y += 5;
//   reqAnim = window.requestAnimationFrame(animate);
// }
// function stopAnimation() {
//   window.cancelAnimationFrame(reqAnim);
// }
// animate()