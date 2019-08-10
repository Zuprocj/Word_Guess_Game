//global varaibles

var wordOptions = ["waffles","panacakes","muffin","coffee","newspaper","banana","eggs","french toast"];
var selectedWord= "";
var lettersInWord = [];       
var numBlanks = 0;                
var blanksAndLetters = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;

// functions

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;


    // reset guesses left
    guessesLeft = 10;
    wrongLetters = [];
    blanksAndLetters = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksAndLetters.push("_");
    }

    document.getElementById("currentWord").innerHTML = blanksAndLetters.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    // console.log(selectedWord);
    // console.log(lettersInWord);
    // console.log(numBlanks);
    // console.log(blanksAndLetters);
}

function checkLetters(letter) {

     var isLetterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord == true;
            }
        }

    if(lettersInWord) {
        for (var i=0; i < numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndLetters[i] = letter;

            }
        }
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }

    // console.log(blanksAndLetters);
}   

function roundComplete(){
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("currentWord").innerHTML = blanksAndLetters.join(" ");
    document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");

    if (lettersInWord.toString() == blanksAndLetters()) {
        winCount++;
        alert("You Win!!")
        document.getElementById("wincounter").innerHTML = winCount;
        startGame();
    }

    else if (guessesLeft == 0) {
        lossCount++;
        alert("You lose!");
        document.getElementById("lossCounter").innerHTML = lossCount;
        startGame();
    }
}


startGame();

document.onkeydown = function(event) {
    var lettersGuessed = String.fromCharCode(event.keycode).toLowerCase();
    checkLetters(lettersGuessed);

}

