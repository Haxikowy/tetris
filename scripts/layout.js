const gradientElements = document.querySelectorAll('.bgp');
const containerElement = document.querySelector('.container');
const gameWindowElement = document.querySelector('.game-window'),
   instructionElement = document.querySelector('.instruction-page'),
   xBtnElement = document.querySelector('.x-btn');
const gameKeyboard = document.querySelector('.keyboard-game'),
   utilityKeyboard = document.querySelector('.keyboard-utility'),
   instructionBtn = document.getElementById('instructionBtn');

const displayElements = (visibility, ...elements) => {
   const allElements = [...elements];

   if (!visibility) {
      allElements.forEach(element => {
         if (!element.classList.contains('d-none')) {
            element.classList.add('d-none');
         }
      });
   } else if (visibility) {
      allElements.forEach(element => {
         if (element.classList.contains('d-none')) {
            element.classList.remove('d-none');
         }
      });
   }
};

const fixGradient = (element, container) => {
   var containerRect = container.getBoundingClientRect();
   var rect = element.getBoundingClientRect();

   element.style.backgroundPosition = `-${rect.x - containerRect.x}px -${
      rect.y
   }px`;
   element.style.backgroundSize = `${containerRect.width}px ${window.innerHeight}px`;
};

const fixRatio = element => {
   element.style.height = element.scrollWidth * 2;
};

const switchKeyboard = () => {
   if (
      window.innerWidth <= 1024 &&
      screen.orientation.type === 'portrait-primary'
   ) {
      if (game.gameOver) {
         displayElements(true, utilityKeyboard, instructionBtn);
         displayElements(false, gameKeyboard);
         gradientElements.forEach(element =>
            fixGradient(element, containerElement)
         );
      }
      if (!game.gameOver) {
         displayElements(true, gameKeyboard);
         displayElements(false, utilityKeyboard, instructionBtn);
         gradientElements.forEach(element =>
            fixGradient(element, containerElement)
         );
      }
   } else if (
      window.innerWidth > 1024 ||
      (window.innerWidth <= 1024 &&
         screen.orientation.type === 'landscape-primary')
   ) {
      displayElements(false, utilityKeyboard, gameKeyboard);
      gradientElements.forEach(element =>
         fixGradient(element, containerElement)
      );
   }
};

addEventListener('DOMContentLoaded', () => {
   switchKeyboard();
   fixRatio(gameWindowElement);
});

addEventListener('resize', () => {
   switchKeyboard();
   fixRatio(gameWindowElement);
});

instructionBtn.addEventListener('click', () => {
   displayElements(true, instructionElement);
});

xBtnElement.addEventListener('click', () => {
   displayElements(false, instructionElement);
});

xBtnElement.addEventListener('mouseenter', e => {
   xBtnElement.style.transform = 'scale(1.25)';
});

xBtnElement.addEventListener('mouseleave', e => {
   xBtnElement.style.transform = 'scale(1)';
});
