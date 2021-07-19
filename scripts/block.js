class Block {
  constructor(ctx) {
    this.ctx = ctx;
    this.y = 0;
    this.x = 0;
    this.initialX = Math.floor(gridCols / 2);
  }
  renderBlock(shape, rotation, grid) {
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        if (blockShapes[shape].blocks[rotation] & (0x8000 >> (i * 4 + j))) {
          // save shape to grid
          grid[i][this.initialX - 2 + j] = blockShapes[shape].digit;

          // instantly render it
          this.ctx.fillStyle = blockShapes[shape].color;
          this.ctx.fillRect((this.initialX - 2 + j) * blockLength, i * blockLength, blockLength, blockLength);
        }
      }
    }
  }
  collision() {

  }
}