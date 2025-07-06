function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('player-choice').
    textContent = `You chose: ${playerChoice}`;

    document.getElementById('computer-choice').
    textContent = `Computer chose: ${computerChoice}`;


    let result = getWinner(playerChoice, computerChoice);
    document.getElementById('winner').textContent = `Result: ${result}`;
}

function getWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    }

    return "You lose!";
}