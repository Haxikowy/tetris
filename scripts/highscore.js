const scores = document.querySelectorAll('.highscores li');

const numberWithSpaces = x =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

const updateScoreboard = async () => {
  const scoresArr = await fetchScores();

  scoresArr.sort((a, b) => b - a);

  scores.forEach((score, i) => {
    if (scoresArr[i]) {
      score.textContent = numberWithSpaces(scoresArr[i]);
    }
  });
};
