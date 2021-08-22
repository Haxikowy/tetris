const scores = document.querySelectorAll('.highscores li');

const updateScoreboard = () => {
  if (localStorage.getItem('scores')) {
    var storedArr = localStorage.getItem('scores');
    var scoresArr = JSON.parse(storedArr);

    scoresArr.sort((a, b) => b - a);

    scores.forEach((score, i) => {
      if (scoresArr[i]) {
        score.textContent = numberWithSpaces(scoresArr[i]);
      }
    })
  }
}

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}