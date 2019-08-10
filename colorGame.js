var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode button event listeners
	setupModeButtons();
	// square event listeners
	setupSquares();
	// reset everything you see
	reset();
};

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares= 6;
			reset();
		});
	};
};

function setupSquares(){
	for (var i = 0; i < squares.length; i++){
		//add click listeners 
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			//compare clicked color to color display
			if (clickedColor === pickedColor){
				resetButton.textContent = "Play Again?"
				messageDisplay.textContent = "Correct!";
				h1.style.backgroundColor = clickedColor;
				changeColors(clickedColor);
			}else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
};

function reset(){
		//generate all new colors
		colors = generateRandomColors(numSquares);
		//pick a new random color from array
		pickedColor = pickColor();
		//change colorDisplay to match picked color
		colorDisplay.textContent = pickedColor;
		resetButton.textContent = "New Colors";
		messageDisplay.textContent = "";
		//change colors of squares
		for (var i = 0; i < squares.length; i++){
			if (colors[i]){
				squares[i].style.display = "block";
				// add initial colors to squares
				squares[i].style.backgroundColor = colors[i];
			}else{
				squares[i].style.display = "none";
			}

		};
		h1.style.background = "steelblue";
};

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
    //loop through all squares 
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.background = color;
    }
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num){
	// make an array
	arr = [];
	// add num random colors to arr 
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor(){
	//pick a "red" form 0-255
	var red = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var green = Math.floor(Math.random() * 256);
	// pick a "blue" from 0-255
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}