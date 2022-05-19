// Retro guessing game
'use strict';
function generateSecretNumber() {
    const num = Math.trunc(Math.random() * 20) + 1;
    return num;
};
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

// variables
let secretNumber = generateSecretNumber();
let score = 20; // state variable
let highscore = 0;

// guesses
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        // no input
        displayMessage('⛔ No number!');

        // when player wins
    } else if (guess === secretNumber) {
        displayMessage('✅ Correct number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        };

        // guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '☝️ Too high!' : '👇 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// reset game (keeps high score)
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    generateSecretNumber();
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = '🤔 Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});