
var UserGuesses = [];
var currentGuess;
var currentCompGuess;
var guessesLeft = 9;
var losses = 0;
var wins = 0;

document.getElementById('stats').innerHTML = "Guesses left = " + guessesLeft + "\n" + "Total losses = " + losses + "\n" + "Total wins = " + wins;
document.getElementById('lettersGuessed').innerHTML = "Previous Guesses: " + " " + UserGuesses.join(" ");

currentCompGuess = generateRandLetter();

document.onkeyup = function (event) {

    currentGuess = event.key;


    if (checkRepeats(currentGuess) === true) {



        if (currentGuess === currentCompGuess) {
            alert("You win");
            guessesLeft = 9;
            losses = 0;
            document.getElementById('stats').innerHTML = "Guesses left = " + guessesLeft + "\n" + "Total losses = " + losses + "\n" + "Total wins = " + wins;
            wins = wins + 1;
            currentCompGuess = generateRandLetter();
            resetGuesses();

            string[x] = " ";

        }
        if (currentGuess !== currentCompGuess) {
            alert("Wrong!");
            guessesLeft = guessesLeft - 1;
            document.getElementById('stats').innerHTML = "Guesses left = " + guessesLeft + "\n" + "Total losses = " + losses + "\n" + "Total wins = " + wins;
            if(guessesLeft === 0){
             //  var video = <iframe width="560" height="315" src="https://www.youtube.com/embed/HaoySOGlZ_U"  allow="autoplay;"></iframe>
                
             //   main.find("#lettersGuessed").append(video);

                alert("You Lose!")
                losses = losses + 1;
                guessesLeft = 9;
                document.getElementById('stats').innerHTML = "Guesses left = " + guessesLeft + "\n" + "Total losses = " + losses + "\n" + "Total wins = " + wins;
                currentCompGuess = generateRandLetter();
                resetGuesses();

            }

        }


    }
}

function generateRandLetter(){
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);
}

function checkRepeats(guess) {
    var bool;
    for (var x = 0; x < UserGuesses.length; x++) {
        if (guess === UserGuesses[x]) {
            alert("Already Guessed!")
            bool = false;
        }

    }
    if (bool === false) {
        return false;
    }
    else {
        UserGuesses.push(guess);
        guessDisplay();
        return true;
    }
}


function guessDisplay() {
     
    document.getElementById('lettersGuessed').innerHTML = "Previous Guesses: " + " " + UserGuesses.join(" ");

}

function resetGuesses(){
    UserGuesses = [];
}