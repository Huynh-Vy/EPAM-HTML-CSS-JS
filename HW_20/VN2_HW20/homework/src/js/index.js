let humanScore = 0;
let computerScore = 0;

document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;
document.getElementById('reset').onclick = reset;

function playRock() {
  play('rock');
}

function playPaper() {
  play('paper');
}

function playScissors() {
  play('scissors');
}

function play(humanChoice) {
  let computerChoice = getComputerChoice();
  document.getElementById('status').innerHTML =
    'You chose ' + humanChoice + ', and the computer chose ' + computerChoice;

  if (humanChoice === 'rock') {
    if (computerChoice === 'rock') {
      document.getElementById('result').innerHTML = 'YOU TIED';
    } else if (computerChoice === 'scissors') {
      document.getElementById('result').innerHTML = 'YOU WIN';
      humanScore = humanScore + 1;
    } else {
      document.getElementById('result').innerHTML = 'YOU LOSE';
      computerScore = computerScore + 1;
    }
  } else if (humanChoice === 'paper') {
    if (computerChoice === 'paper') {
      document.getElementById('result').innerHTML = 'YOU TIED';
    } else if (computerChoice === 'rock') {
      document.getElementById('result').innerHTML = 'YOU WIN';
      humanScore = humanScore + 1;
    } else {
      document.getElementById('result').innerHTML = 'YOU LOSE';
      computerScore = computerScore + 1;
    }
  } else if (humanChoice === 'scissors') {
    if (computerChoice === 'scissors') {
      document.getElementById('result').innerHTML = 'YOU TIED';
    } else if (computerChoice === 'paper') {
      document.getElementById('result').innerHTML = 'YOU WIN';
      humanScore = humanScore + 1;
    } else {
      document.getElementById('result').innerHTML = 'YOU LOSE';
      computerScore = computerScore + 1;
    }
  }

  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
}

function getComputerChoice() {
  let plays = ['rock', 'paper', 'scissors'];
  let choice = plays[Math.floor(Math.random() * plays.length)];
  return choice;
}

function reset() {
  document.getElementById('status').innerHTML = '';
  document.getElementById('result').innerHTML = '';
  humanScore = 0;
  computerScore = 0;
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
}
