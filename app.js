const startGameBtn = document.getElementById('start-game-btn')


const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK
const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WINS = 'PLAYER_WINS'
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS'


let gameIsRunning = false

let images = {
  ROCK: 'images/fist.png',
  PAPER: 'images/hand-paper.png',
  SCISSORS: 'images/scissors.png'
}
const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}? `, '').toUpperCase()
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice! We chose ${DEFAULT_USER_CHOICE} for you!`)
    return DEFAULT_USER_CHOICE
  }
  return selection
}

const getComputerChoice = () => {
  const randomValue = Math.random()
  if (randomValue < 0.34) {
    return ROCK
  } else if (randomValue < 0.67) {
    return PAPER
  } else {
    return SCISSORS
  }
}

const getWinner = (cChoice, pChoice) => //exemplo de uso de Arrow Function + ternario
  cChoice === pChoice
    ? alert(RESULT_DRAW)
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
      ? alert(RESULT_PLAYER_WINS)
      : alert(RESULT_COMPUTER_WINS)

const imageToPutComputer = function (cChoice) {
  if (cChoice === ROCK) {
    showComputerRockImage()
  } else if (cChoice === PAPER) {
    showComputerPaperImage()
  } else {
    showComputerScissorsImage()
  }
}

const imageToPutPlayer = function (pChoice) {
  if (pChoice === ROCK) {
    showRockImage()
  } else if (pChoice === PAPER) {
    showPaperImage()
  } else {
    showScissorsImage()
  }
}



startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return
  }
  gameIsRunning = true
  console.log('Game is starting...')
  const playerSelection = getPlayerChoice()
  imageToPutPlayer(playerSelection)
  const computerSelection = getComputerChoice()
  imageToPutComputer(computerSelection)
  getWinner(computerSelection, playerSelection)
  console.log(playerSelection)
  console.log(computerSelection)
  gameIsRunning = false
})


//image for player
function showImage(imageSrc) {
  const imageContainer = document.querySelector('.image-container')
  const image = document.createElement("img")
  image.src = imageSrc
  imageContainer.appendChild(image)
}

function showRockImage() {
  showImage("images/fist.png")
}

function showPaperImage() {
  showImage("images/hand-paper.png")
}

function showScissorsImage() {
  showImage("images/scissors.png")
}


//image for computer
function showComputerImage(imageSrc) {
  const imageContainer = document.querySelector('.image-container__computer')
  const image = document.createElement("img")
  image.src = imageSrc
  imageContainer.appendChild(image)
}

function showComputerRockImage() {
  showComputerImage("images/fist.png")
}

function showComputerPaperImage() {
  showComputerImage("images/hand-paper.png")
}

function showComputerScissorsImage() {
  showComputerImage("images/scissors.png")
}
