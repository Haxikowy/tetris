const canvas = document.getElementById('game-window');

// check for browser support
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
}
const game = new Game(ctx);

const rand = (max) => {
  return Math.floor((Math.random() * max));
}

const gameLoop = () => {
  if (game.fallingBlock === null) {
    const newBlock = new Block(ctx, rand(7), rand(4));
    game.fallingBlock = newBlock;
  }
  game.drawGameState();
  game.moveDown();
  setTimeout(gameLoop, 1000);
}

gameLoop();

window.addEventListener('keydown', e => {
  console.log(e.key)
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
  }
});