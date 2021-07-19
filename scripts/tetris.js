const canvas = document.getElementById('game-window');

// check for browser support
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
}

const block = new Block(ctx);
const game = new Game(ctx);

// game.gameLoop();
// block.renderBlock(4, 1, grid);
// game.drawGameState();

// console.log(grid);