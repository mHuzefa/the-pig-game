var playerScore, currentScore, dice, randomGenerator, currentPlayer

playerScore = [0, 0]
currentScore = 0
currentPlayer = 0

var diceBtn = document.querySelector('.btn--roll')
var holdBtn = document.querySelector('.btn--hold')
var newBtn = document.querySelector('.btn--new')
var imgSrc = document.querySelector('.dice')
var score = document.getElementsByClassName('score')
var current_score = document.querySelectorAll('.current-score')
var name1 = document.querySelector('#name--1')
var name2 = document.querySelector('#name--2')
//Random Image Getter Setter
function randomImages(randomGenerator) {
  if (randomGenerator === 1) {
    imgSrc.setAttribute('src', 'dice-1.png')
  } else if (randomGenerator === 2) {
    imgSrc.setAttribute('src', 'dice-2.png')
  } else if (randomGenerator === 3) {
    imgSrc.setAttribute('src', 'dice-3.png')
  } else if (randomGenerator === 4) {
    imgSrc.setAttribute('src', 'dice-4.png')
  } else if (randomGenerator === 5) {
    imgSrc.setAttribute('src', 'dice-5.png')
  } else {
    imgSrc.setAttribute('src', 'dice-6.png')
  }
}

function scoreGainer(randomNumber) {
  if (randomNumber === 1) {
    currentScore += 1
  } else if (randomNumber === 2) {
    currentScore += 2
  } else if (randomNumber === 3) {
    currentScore += 3
  } else if (randomNumber === 4) {
    currentScore += 4
  } else if (randomNumber === 5) {
    currentScore += 5
  } else {
    currentScore += 6
  }
  winner()
}

function playerChange() {
  if (currentPlayer === 0) {
    playerScore[0] = currentScore
    document.querySelector('#score--' + currentPlayer).textContent =
      playerScore[0]

    currentPlayer = 1
    currentScore = playerScore[1]
  } else {
    playerScore[1] = currentScore
    document.querySelector('#score--' + currentPlayer).textContent =
      playerScore[1]
    currentPlayer = 0
    currentScore = playerScore[0]
  }
}

function reset() {
  playerScore = [0, 0]
  currentScore = 0
  currentPlayer = 0
  for (let i = 0; i < score.length; i++) {
    score[i].textContent = 0
    current_score[i].textContent = 0
  }
  imgSrc.style.display = 'none'
  diceBtn.disabled = false
  holdBtn.disabled = false
}
function winner() {
  if (currentScore >= 100) {
    document.querySelector('#name--' + currentPlayer).textContent = 'Winner'
    diceBtn.disabled = true
    holdBtn.disabled = true
  }
}
function activePlayer() {
  if (currentPlayer === 0) {
    player0.classList.remove('player--active')

    player1.classList.add('player--active')
  } else {
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
  }
}

diceBtn.addEventListener('click', () => {
  randomGenerator = Math.floor(Math.random() * 6) + 1

  randomImages(randomGenerator)
  scoreGainer(randomGenerator)
  imgSrc.style.display = 'block'
  document.querySelector(
    '#current--' + currentPlayer
  ).textContent = currentScore
})
var player0 = document.getElementById('0')
var player1 = document.getElementById('1')
console.log(player0, player1)
holdBtn.addEventListener('click', () => {
  activePlayer()
  playerChange()
})

newBtn.addEventListener('click', () => {
  if (currentPlayer === 0) {
    document.querySelector('#name--0').textContent = 'Player 1'
  } else if (currentPlayer === 1) {
    document.querySelector('#name--1').textContent = 'Player 2'
  }
  activePlayer()
  reset()
})
