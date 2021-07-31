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



const downTick = () => {
  if (game.gameOver) {
    return
  }
  // move block down
  game.moveDown();

  setTimeout(downTick, levelArray[game.level]);
}


const gameLoop = () => {
  if (game.gameOver) {
    return
  }

  // add new falling block if there isn't any
  if (game.fallingBlock === null) {
    const currentBlock = new Block(ctx, rand(7), rand(4));
    game.fallingBlock = currentBlock;
  }

  if (game.nextFallingBlock === null) {
    const nextBlock = new Block(ctx, rand(7), rand(4));
    game.nextFallingBlock = nextBlock;
  }

  // draw gameGrid
  game.drawGameState();

  // check if there is winning lane
  game.checkLines();

  // check if you need to speed up game
  game.checkLevel();

  // TODO it's simple update ui function will do it oop in next commit
  updateUI();

  setTimeout(gameLoop, fps);
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
      if (!game.gameOver) {
        game.score++
      }
      break;
    case 'ArrowUp':
      game.rotate();
      break;
    case ' ': // TODO add gameover functionality
      if (game.gameOver) {
        game.gameOver = false;
        gameLoop();
        downTick();
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
  const nextBlock = game.nextFallingBlock
  levelUI.textContent = game.level;
  linesUI.textContent = game.lineCleared;
  scoreUI.textContent = game.score;

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (nextBlock.shape[i][j] > 0) {
        nxtCtx.fillStyle = blockShapes[nextBlock.blockShape].color;
        nxtCtx.fillRect(j * 20, i * 20, 20, 20);
      } else {
        nxtCtx.clearRect(j * 20, i * 20, 20, 20);
      }
    }
  }
}