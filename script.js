'use strict';

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (msg) {
    document.querySelector('.message').textContent = msg;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage('🚫 No Number!');
    } else if (guess === secretNumber) {
        displayMessage('🙌🏻 Correct Guess');
        document.querySelector('.ques').textContent = secretNumber;
        document.querySelector('.ques').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('😶 You lost the Game!');
            document.querySelector('.highscore').textContent = 0;
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#E63946';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 10) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.ques').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.ques').style.width = '15rem';
    document.querySelector('.guess').value = '';
});