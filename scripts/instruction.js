const instruction = document.querySelector('.instruction-container');
const instructionBtn = document.querySelector('.instruction-btn');
const xBtn = document.querySelector('.x-btn');


instructionBtn.addEventListener('click', () => {
  if (instruction.classList.contains('d-none')) instruction.classList.remove('d-none');
})

xBtn.addEventListener('click', () => {
  if (!instruction.classList.contains('d-none')) instruction.classList.add('d-none');
})


// animation phase
let i = 0;

instructionBtn.addEventListener('mouseover', e => {
  if (i === 0) {
    instructionBtn.style.setProperty('--btn-bg', 'var(--cyan)')
  } else if (i === 1) {
    instructionBtn.style.setProperty('--btn-bg', 'var(--violet)')
  } else if (i === 2) {
    instructionBtn.style.setProperty('--btn-bg', 'var(--orange)')
  } else if (i === 3) {
    instructionBtn.style.setProperty('--btn-bg', 'var(--green)')
  }
  i++;
  if (i >= 4) i = 0;
})

xBtn.addEventListener('mouseenter', e => {
  xBtn.style.transform = 'scale(1.25)';
});

xBtn.addEventListener('mouseleave', e => {
  xBtn.style.transform = 'scale(1)';
});