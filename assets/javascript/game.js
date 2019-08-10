//global varaibles

var wordOptions = ["waffles", "panacakes", "muffin", "coffee", "eggs", "french toast", "omelette du fromage", "oatmeal", "fresh fruit", "bacon"];
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

    document.getElementById("selectedWord").innerHTML = blanksAndLetters.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;


    

    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndLetters);
}

function checkLetters(letter) {

    var isLetterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
            }
        }

    if(isLetterInWord) {
        for (var i=0; i < numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndLetters[i] = letter;
            }
        }
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--;
    }

    console.log(blanksAndLetters);
}   

function roundComplete(){
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("selectedWord").innerHTML = blanksAndLetters.join(" ");
    document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");
    document.getElementById("gameover-image").style.cssText = "display: none";
    document.getElementById("youwin-image").style.cssText = "display: none";

    if (lettersInWord.toString() == blanksAndLetters.toString()) {
        winCount++;
        alert("You Win!! The word was " + selectedWord);
        document.getElementById("winCounter").innerHTML = winCount;
        document.getElementById("youwin-image").style.cssText = "display: block";
        startGame();
    }

    else if (guessesLeft == 0) {
        lossCount++;
        alert("You lose! The word was " + selectedWord);
        document.getElementById("lossCounter").innerHTML = lossCount;
        document.getElementById("gameover-image").style.cssText = "display: block";
        startGame();
    }
}


startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    console.log(letterGuessed);

}