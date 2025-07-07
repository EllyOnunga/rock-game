
window.onload = function () {
let playerScore = Number(localStorage.getItem('playerScore'));
let computerScore = Number(localStorage.getItem('computerScore'));

if (isNaN(playerScore)) playerScore = 0;
if (isNaN(computerScore)) computerScore = 0;

updateScore();

window.play = function (playerChoice) {
    const sound = document.getElementById('click-sound');
    if (sound) sound.play();

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

window.resetGame = function () {
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

function updateScore() {
    localStorage.setItem('playerScore', playerScore.toString());
    localStorage.setItem('computerScore', computerScore.toString());

    document.getElementById('score').textContent = 
    `Player: ${playerScore} | Computer: ${computerScore}`;
}
};