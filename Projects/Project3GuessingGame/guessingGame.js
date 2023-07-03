var secret = Math.floor(Math.random()*10+1); // random number from 1-10
console.log(secret);                         // logs the secret number for testing if the program works
var guess;                                   // the player's guessed number
var correct = false;                         // boolean to check if player guess is equal to secret number

// while the guess in incorrect, say whether the guess was to high or too low and ask again
while (!correct) {
    guess = parseInt(prompt("Please guess the secret number (1-10)"));

    if (guess !== secret) {
        if (guess > secret) {
            alert("Incorrect, too high.");
        } else {
            alert("Incorrect, too low");
        }
    } else {
        correct = true;
    }
}

alert("Correct!");