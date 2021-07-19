class Game {
  constructor(ctx) {
    this.ctx = ctx;


    this.makeGameGrid();
    block.renderBlock(this.randomNumber(7), this.randomNumber(4), this.grid);
    // this.moveBlockDown();
    this.gameLoop();
  }
  randomNumber(max) {
    return Math.floor((Math.random() * max));
  }
  makeGameGrid() {
    this.grid = [];
    for (var i = 0; i < gridRows; i++) {
      this.grid.push([]);
      for (var j = 0; j < gridCols; j++) {
        this.grid[this.grid.length - 1].push(0);
      }
    }
    return this.grid;
  }

  drawGameState() {
    for (var y = 0; y < gridRows; y++) {
      for (var x = 0; x < gridCols; x++) {
        for (var block = 0; block < 7; block++) {
          if (blockShapes[block].digit === this.grid[y][x]) {
            this.ctx.fillStyle = blockShapes[block].color;
            this.ctx.fillRect(x * blockLength, y * blockLength, blockLength, blockLength);
          } else if (this.grid[y][x] === 0) {
            this.ctx.clearRect(x * blockLength, y * blockLength, blockLength, blockLength)
          }
        }
      }
    }
  }

  moveBlockDown() {
    for (var y = gridRows - 1; y >= 0; y--) {
      for (var x = 0; x < gridCols - 1; x++) {
        if (this.grid[y][x] > 0) {
          [this.grid[y + 1][x], this.grid[y][x]] = [this.grid[y][x], this.grid[y + 1][x]];
        }
      }
    }
  }

  gameLoop = () => {
    this.drawGameState();
    this.moveBlockDown();
    setTimeout(this.gameLoop, 1000)
  }
}