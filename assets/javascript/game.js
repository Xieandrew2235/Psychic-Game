var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesleft = 10;
var yourguesses = "";

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("guessesleft-text");
var yourguessesText = document.getElementById("yourguesses-text");

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);




document.onkeyup = function (event) {

    var userGuess = event.key; 
   if (!(computerChoices.indexOf(userGuess) === -1)) {

        if (guessesleft === 0)  {
            wins = 0;
            losses++
            guessesleft = 10;
            yourguesses = " ";
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(computerGuess);
            
        } else if (userGuess !== computerGuess && guessesleft >0) {
            guessesleft--;
            yourguesses = yourguesses + userGuess + " ";

        }
       if (userGuess === computerGuess) {
           wins++;
           guessesleft = 10;
           yourguesses = " ";
           computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(computerGuess);
       }

        directionsText.textContent = "";

        userChoiceText.textContent = "You chose: " + userGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesleftText.textContent = "guesses left: " + guessesleft;
        yourguessesText.textContent = "your guesses: " + yourguesses;

   }
};

