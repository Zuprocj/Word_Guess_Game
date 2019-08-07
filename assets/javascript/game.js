// word list 
var selectableWords = ["waffles","panacakes","muffin",];

const maxTries = 10;            

var guessedLetters = [];        
var currentWordIndex;          
var guessingWord = [];         
var remainingGuesses = 0;       
var gameStarted = false;        
var hasFinished = false;           
var wins = 0;                  

function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;
}

currentWordIndex = Math.floor(math.random() * (selectableWords.length));

guessedLetters = [];
guessingWord = [];

for (var i = 0; i <selectableWords[currentWordIndex].length; i++) {
    guessingWord.push("_";)
}