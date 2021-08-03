const instruction = document.querySelector('.instruction-container');
const instructionBtn = document.querySelector('.instruction-btn');
const xBtn = document.querySelector('.x-btn');


instructionBtn.addEventListener('click', () => {
  if (instruction.classList.contains('d-none')) instruction.classList.remove('d-none');
})

xBtn.addEventListener('click', () => {
  if (!instruction.classList.contains('d-none')) instruction.classList.add('d-none');
})