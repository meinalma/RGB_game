var numSquares = 6;
var square = document.getElementsByClassName('square');
var colorDisplay = document.querySelector('h1 span');
var tryAgain = document.querySelector('.tryagain');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyButton = document.querySelector('#easy');
var hardButton = document.querySelector('#hard');
var hiddenSquares = document.querySelectorAll('.second');

var colors = generateRandomColors(numSquares);

var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

//loop through squares
for(var i = 0; i < square.length; i++){
  //add initial colors to squares
    square[i].style.backgroundColor = colors[i];

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
  //hide tryagain text
  tryAgain.style.display = 'none';
  //generate all new Colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i < square.length; i++){
  //add initial colors to squares
    square[i].style.backgroundColor = colors[i];
  }
  //change back h1 background
  h1.style.backgroundColor = 'rgb(13, 108, 168)';
  //change resetbutton textcontent back to new colors
  resetButton.textContent = "New Colors";
});

//easy version
easyButton.addEventListener("click", function(){

  this.classList.toggle('blue');
  hardButton.classList.remove('blue');

  //hide tryagain text
  tryAgain.style.display = 'none';

  numSquares = 3;

  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for(var i = 0; i < square.length; i++){
    if(colors[i]){
      square[i].style.backgroundColor = colors[i];
    } else {
      square[i].style.display = 'none';
    }
  }
  //change back h1 background
  h1.style.backgroundColor = 'rgb(13, 108, 168)';
});

//hard version
hardButton.addEventListener("click", function(){
  this.classList.toggle('blue');
  easyButton.classList.remove('blue');

  //hide tryagain text
  tryAgain.style.display = 'none';

  numSquares = 6;

  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for(var i = 0; i < square.length; i++){
      square[i].style.display = 'block';
      square[i].style.backgroundColor = colors[i];
  }
  //change back h1 background
  h1.style.backgroundColor = 'rgb(13, 108, 168)';
});
