class Block {
  constructor(ctx, blockShape, rotation) {
    this.ctx = ctx;
    this.blockShape = blockShape;
    this.rotation = rotation;

    this.y = 0;
    this.x = Math.floor(gridCols / 2) - 2;
    this.decodeShape();
  }
  // this function decodes shape
  // from hexadecimal bitmask
  // to 4x4 array
  decodeShape() {
    this.shape = []
    for (var i = 0; i < 4; i++) {
      this.shape.push([]);
      for (var j = 0; j < 4; j++) {
        if (blockShapes[this.blockShape].blocks[this.rotation] & (0x8000 >> (i * 4 + j))) {
          this.shape[this.shape.length - 1].push(blockShapes[this.blockShape].digit);
        } else {
          this.shape[this.shape.length - 1].push(0);
        }
      }
    }
  }

  renderBlock() {
    this.shape.map((row, i) => {
      row.map((cell, j) => {
        if (cell > 0) {
          this.ctx.fillStyle = blockShapes[this.blockShape].color;
          this.ctx.fillRect((this.x + j) * blockLength, (this.y + i) * blockLength, blockLength, blockLength);
        }
      })
    })
  }
}