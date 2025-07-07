let playerScore = parseInt(localStorage.getItem('playerScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

updateScore();

function play(playerChoice) {
    document.getElementById('click-sound').play();

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('player-choice').
    textContent = `You chose: ${playerChoice}`;

    document.getElementById('computer-choice').
    textContent = `Computer chose: ${computerChoice}`;


    let result = '';
    let comment = '';

    if (playerChoice === computerChoice) {
        result = "It's a draw!";
        comment= "Wow, great minds think alike!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
        playerScore++;
        comment = "Nice job! You're on fire!";
    } else {
        result = "You lose!";
        computerScore++;
        comment = "Better luck next time!";
    }
    document.getElementById('result').textContent = `Result: ${result}`;
    document.getElementById('comment').textContent = comment;

    updateScore();
}

function updateScore() {
    document.getElementById('score').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('computerScore', computerScore);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    localStorage.removeItem('playerScore');
    localStorage.removeItem('computerScore');

    document.getElementById('score').textContent = 'Player: 0 | Computer: 0';
    document.getElementById('player-choice').textContent = 'You chose: -';
    document.getElementById('computer-choice').textContent = 'Computer chose: -';

    document.getElementById('result').textContent = 'Result: -';
    document.getElementById('comment').textContent = '';
}