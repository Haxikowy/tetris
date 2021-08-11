const nxtCvsContainer = document.querySelector('.cvs-container');

nxtCvsContainer.style.setProperty('--isAnimated', 'paused');

const animateBorder = () => {
  if (nxtCvsContainer.style.getPropertyValue('--isAnimated') === 'paused') {
    nxtCvsContainer.style.setProperty('--isAnimated', 'running');
  } else if (nxtCvsContainer.style.getPropertyValue('--isAnimated') === 'running') {
    nxtCvsContainer.style.setProperty('--isAnimated', 'paused')
  }
}