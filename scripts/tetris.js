const canvas = document.getElementById('game-window');

// check for browser support
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
}
const game = new Game(ctx);
let level = 1000;

const rand = (max) => {
  return Math.floor((Math.random() * max));
}

const gameLoop = () => {
  if (game.gameOver) {
    return
  }
  // add new falling block if there isn't any
  if (game.fallingBlock === null) {
    const newBlock = new Block(ctx, rand(7), rand(4));
    game.fallingBlock = newBlock;
  }
  game.moveDown();
  game.drawGameState();
  // TODO add 'level acceleration' after gaining some score
  setTimeout(gameLoop, level);
}

window.addEventListener('keydown', e => {
  console.log(e.key);
  switch (e.key) {
    case 'ArrowLeft':
      game.moveSide(false);
      break;
    case 'ArrowRight':
      game.moveSide(true);
      break;
    case 'ArrowDown':
      game.moveDown();
      break;
    case 'ArrowUp':
      game.rotate();
      break;
    case ' ': // TODO add gameover functionality
      game.gameOver = false;
      gameLoop();
      break;
    case '+':
      level -= 20;
      console.log(level);
      break;
    case '-':
      level += 20;
      console.log(level);
      break;
  }
});