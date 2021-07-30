const gameCanvas = document.getElementById('game-window');
const nextBlockCanvas = document.getElementById('nxt-block');
const levelUI = document.querySelector('.level');
const linesUI = document.querySelector('.lines');
const scoreUI = document.querySelector('.score');

// check for browser support
if (gameCanvas.getContext) {
  var ctx = gameCanvas.getContext('2d');
  var nxtCtx = nextBlockCanvas.getContext('2d');
}
const game = new Game(ctx);

const rand = (max) => {
  return Math.floor((Math.random() * max));
}

const gameLoop = () => {
  if (game.gameOver) {
    game.handleGameOver();
    return
  }
  // add new falling block if there isn't any
  if (game.fallingBlock === null) {
    const newBlock = new Block(ctx, rand(7), rand(4));
    game.fallingBlock = newBlock;
  }
  // move block down
  game.moveDown();

  // draw gameGrid
  game.drawGameState();

  // check if there is winning lane
  game.checkLines();

  // check if you need to speed up game
  game.checkLevel();

  // TODO it's simple update ui function will do it oop in next commit
  updateUI();

  setTimeout(gameLoop, levelArray[game.level]);
}

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowLeft':
      game.moveSide(false);
      break;
    case 'ArrowRight':
      game.moveSide(true);
      break;
    case 'ArrowDown':
      game.moveDown();
      game.score++
      break;
    case 'ArrowUp':
      game.rotate();
      break;
    case ' ': // TODO add gameover functionality
      if (game.gameOver === true) {
        game.gameOver = false;
        gameLoop();
      }
      break;
    case '+':
      game.level++;
      break;
    case '-':
      game.level--;
      break;
    case 'i':
      console.log('level ', game.level);
      console.log('cleared ', game.lineCleared);
      console.log('score ', game.score);
      break;
  }
});

const updateUI = () => {
  levelUI.textContent = game.level;
  linesUI.textContent = game.lineCleared;
  scoreUI.textContent = game.score;
}