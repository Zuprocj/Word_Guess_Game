//global varaibles

var wordOptions = ["waffles","panacakes","muffin","coffee","newspaper","banana","eggs"];
var currentWordIndex= "";
var lettersInWord = [];       
var numBlanks = 0;                
var blanksAndLetters = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;

// functions

function startGame() {
    currentWordIndex = wordOptions[Math.floor(Math.random() *wordOptions.length];
    lettersInWord = currentWordIndex.split("");
    numBlanks = lettersInWord.length;

    // reset guesses left
    guessesLeft = 10;
    wrongLetters = [];
    blanksAndLetters = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksAndLetters.push("_");
    }
}

    document.getElementById("currentWord").innerhtml = blanksAndLetters.join(" ");
    document.getElementById("wrongGuess").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;



startGame();

document.onkeyup = function(event) {
    var lettersGuessed = String.fromCharCode(event.keycode).toLowerCase();
}