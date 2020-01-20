var numSquares = 6;
var square = document.getElementsByClassName('square');
var colorDisplay = document.querySelector('h1 span');
var tryAgain = document.querySelector('.tryagain');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var difficulty = document.getElementsByClassName('difficulty');
var hiddenSquares = document.querySelectorAll('.second');
var colors = [];
var pickedColor

init();

function init() {
  //easy and hard versions
  for(var i = 0; i < difficulty.length; i++) {
    difficulty[i].addEventListener("click", function(){
      difficulty[0].classList.remove('blue');
      difficulty[1].classList.remove('blue');
      this.classList.add('blue');

      if(this.textContent === "Easy"){
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();
    });
  }

  //loop through squares and add colors
  for(var i = 0; i < square.length; i++){
    //add EventListeners to squares
    square[i].addEventListener("click", function(){
      //make tryagain content appear
      tryAgain.style.display = 'block';
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to picked color
      if(clickedColor === pickedColor) {
        tryAgain.textContent = "Correct";
        changeColors(clickedColor);
        resetButton.textContent = "Play again";
      } else {
        this.style.backgroundColor = '#232323';
        tryAgain.textContent = "Try Again";
      }
    });
  }

  reset();

}

function reset() {
  //hide tryagain text
  tryAgain.style.display = 'none';
  //generate all new Colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i < square.length; i++){
    if(colors[i]){
      square[i].style.display = "block";
      square[i].style.background = colors[i];
    } else {
      square[i].style.display = "none";
    }
  //add initial colors to squares
    square[i].style.backgroundColor = colors[i];
  }
  //change back h1 background
  h1.style.backgroundColor = 'rgb(13, 108, 168)';
  //change resetbutton textcontent back to new colors
  resetButton.textContent = "New Colors";
}

function changeColors(color){
  h1.style.backgroundColor = color;
  for(var i = 0; i < square.length; i++){
    square[i].style.backgroundColor = color;
  }
}

//generate random number
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an empty array
  var arr = [];
  //add num of times random colors to array
  for(var i = 0; i < num; i++){
    arr.push(generateColors());
  }
  //return array
  return arr;
}

function generateColors() {
  //red
  var r = Math.floor(Math.random() * 256);
  //green
  var g = Math.floor(Math.random() * 256);
  //blue
  var b = Math.floor(Math.random() * 256);
  //return
   return "rgb(" + r + ", " + g + ", " + b + ")";
}

//reset Game
resetButton.addEventListener("click", function(){
  reset();
});
