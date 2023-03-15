const playerChoice = document.querySelector('.player-choice');
const playerIcons = document.querySelectorAll('.player')

const computerChoice = document.querySelector('.computer-choice')

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const reset = document.querySelector('.reset');
const message = document.querySelector('.message');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');

const computerChoices = [computerRock.title, computerPaper.title, computerScissors.title, computerLizard.title, computerSpock.title]

const choices = {
    'Rock': ['Scissors', 'Lizard'],
    'Paper': ['Rock', 'Spock'],
    'Scissors': ['Paper', 'Lizard'],
    'Lizard': ['Paper', 'Spock'],
    'Spock': ['Scissors', 'Rock'],
};


let playerSelection = '';
let computerSelection = '';
let currentPlayerScore = 0;
let currentComputerScore = 0;
let resumePlay = false;


//when player selects icon, it turns black and choice is indicated next to score 
const playerSelect = (title) => {
    playerChoice.textContent = ` --- ${title}`
    switch(title) {
        case 'Rock':
            playerRock.classList.add('selected');
            playerSelection = playerRock;
            break;
        case 'Paper':
            playerPaper.classList.add('selected');
            playerSelection = playerPaper;
            break;
        case 'Scissors':
            playerScissors.classList.add('selected');
            playerSelection = playerScissors;
            break;
        case 'Lizard':
            playerLizard.classList.add('selected');
            playerSelection = playerLizard;
            break;
        case 'Spock':
            playerSpock.classList.add('selected');
            playerSelection = playerSpock;
            break;
        default:
            break;
    }
}



//when player selects icon, computer selects random icon
const randomize = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return computerChoices[num]
}

const computerSelect = (title) => {
    computerChoice.textContent = ` --- ${title}`
    switch(title) {
        case 'Rock':
            computerRock.classList.add('selected');
            computerSelection = computerRock;
            break;
        case 'Paper':
            computerPaper.classList.add('selected');
            computerSelection = computerPaper;
            break;
        case 'Scissors':
            computerScissors.classList.add('selected');
            computerSelection = computerScissors;
            break;
        case 'Lizard':
            computerLizard.classList.add('selected');
            computerSelection = computerLizard;
            break;
        case 'Spock':
            computerSpock.classList.add('selected');
            computerSelection = computerSpock;
            break;
        default:
            break;
    }
}

//win, tie or lose 

const gamePlay = () => {
    let player = playerSelection.title; 
    let computer = computerSelection.title; 
    if (player === computer) {
        message.textContent = "It's a tie."
        stopConfetti();
    } else if (!choices[player].includes(computer)) {
        message.textContent = "You lose!"
        currentComputerScore = currentComputerScore + 1
        computerScore.textContent = currentComputerScore;
        stopConfetti();
    } else {
        message.textContent = "You win!"
        currentPlayerScore = currentPlayerScore + 1
        playerScore.textContent = currentPlayerScore;
        startConfetti();
    }
}


//start of game vs ongoing game 
const gameProgress = (title) => {
    if (resumePlay === false) {
        playerSelect(title);
        computerSelect(randomize(0,4));
        setTimeout(gamePlay, 0);
        resumePlay = true;
    } else {
        resetSelection();
        setTimeout(playerSelect(title), 0)
        setTimeout(computerSelect(randomize(0,4)), 0)
        setTimeout(gamePlay, 1);
    }
    
}


//reset all
const resetGame = () => {
    playerSelection.classList.remove('selected');
    computerSelection.classList.remove('selected');
    playerChoice.textContent = '';
    computerChoice.textContent = '';
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    currentPlayerScore = 0;
    currentComputerScore = 0;
    message.textContent = '';
    resumePlay = false;
    stopConfetti();
}

//reset selection
const resetSelection = () => {
    playerSelection.classList.remove('selected');
    computerSelection.classList.remove('selected');
}



playerIcons.forEach(playerIcon => {
    playerIcon.addEventListener("click", () => gameProgress(playerIcon.title))
})

reset.addEventListener('click', () => resetGame())





