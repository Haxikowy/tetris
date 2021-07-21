class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.fallingBlock = null;

    this.makeGameGrid();
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

  collision(x, y, shape) {
    this.fallingBlock.shape.map(

    )
  }

  drawGameState() {
    for (var y = 0; y < gridRows; y++) {
      for (var x = 0; x < gridCols; x++) {
        for (var block = 0; block < 7; block++) {
          // check if there is a digit assigned to grid cell value
          // and change the color to one that should be
          if (blockShapes[block].digit === this.grid[y][x]) {
            this.ctx.fillStyle = blockShapes[block].color;
            this.ctx.fillRect(x * blockLength, y * blockLength, blockLength, blockLength);
          } else if (this.grid[y][x] === 0) {
            // if there is 0 just remove possible square that here was
            this.ctx.clearRect(x * blockLength, y * blockLength, blockLength, blockLength)
          }
        }
      }
    }
    // render block that is currently falling
    if (this.fallingBlock !== null) {
      this.fallingBlock.renderBlock();
    }
  }

  moveDown() {
    if (this.fallingBlock !== null) {
      this.fallingBlock.y += 1;
    }
    this.drawGameState();
  }

  moveSide(right) {
    if (right) {
      this.fallingBlock.x += 1;
      this.drawGameState();
    } else if (!right) {
      this.fallingBlock.x -= 1;
      this.drawGameState();
    }
  }
  rotate() {
    this.fallingBlock.rotation += 1;
    this.fallingBlock.decodeShape();
    this.drawGameState();
    if (this.fallingBlock.rotation > 3) {
      this.fallingBlock.rotation = 0;
      this.fallingBlock.decodeShape();
      this.drawGameState();
    }
  }

}