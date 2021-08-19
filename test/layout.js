const gradientElements = document.querySelectorAll('.bgp');
const containerElement = document.querySelector('.container');
const gameWindowElement = document.querySelector('.game-window');
const gameKeyboard = document.querySelector('.keyboard-game'),
  utilityKeyboard = document.querySelector('.keyboard-utility'),
  instructionBtn = document.getElementById('instructionBtn');

const displayElements = (visibility, ...elements) => {
  const allElements = [...elements];

  if (!visibility) {
    allElements.forEach(element => {
      if (!element.classList.contains('d-none')) {
        element.classList.add('d-none')
      }
    })
  } else if (visibility) {
    allElements.forEach(element => {
      if (element.classList.contains('d-none')) {
        element.classList.remove('d-none')
      }
    })
  }
}

const fixGradient = (element, container) => {
  var containerRect = container.getBoundingClientRect();
  var rect = element.getBoundingClientRect();

  element.style.backgroundPosition = `-${rect.x - containerRect.x}px -${rect.y}px`
  element.style.backgroundSize = `${containerRect.width}px ${window.innerHeight}px`;
}

const fixRatio = (element) => {
  element.style.height = element.scrollWidth * 2;
}


addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 1024 && screen.orientation.type === 'portrait-primary') {
    displayElements(true, utilityKeyboard, instructionBtn)
  } else if (window.innerWidth >= 1024 && screen.orientation.type === 'landscape-primary') {
    displayElements(false, utilityKeyboard, gameKeyboard)
  }

  gradientElements.forEach(element => fixGradient(element, containerElement))
  fixRatio(gameWindowElement);
})

addEventListener('resize', () => {
  if (window.innerWidth < 1024 && screen.orientation.type === 'portrait-primary') {
    displayElements(true, utilityKeyboard)
  } else if (window.innerWidth >= 1024 && screen.orientation.type === 'landscape-primary') {
    displayElements(false, utilityKeyboard, gameKeyboard)
  }

  gradientElements.forEach(element => fixGradient(element, containerElement))
  fixRatio(gameWindowElement);
})