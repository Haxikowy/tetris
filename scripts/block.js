class Block {
  constructor(ctx, blockShape, rotation) {
    this.ctx = ctx;
    this.blockShape = blockShape;
    this.rotation = rotation;
    this.nextRotation = this.rotation + 1;

    this.y = 0;
    this.x = Math.floor(gridCols / 2) - 2;
    this.decodeShape();
  }
  // this function decodes current shape
  // and next shape
  // from hexadecimal bitmask
  // to 4x4 matrix
  decodeShape() {
    this.shape = [];
    this.nextShape = [];
    if (this.rotation > 3) {
      this.rotation = 0;
    }
    if (this.nextRotation > 3) {
      this.nextRotation = 0;
    }

    for (var i = 0; i < 4; i++) {
      this.shape.push([]);
      this.nextShape.push([]);
      for (var j = 0; j < 4; j++) {
        if (blockShapes[this.blockShape].blocks[this.rotation] & (0x8000 >> (i * 4 + j))) {
          this.shape[i].push(blockShapes[this.blockShape].digit);
        } else {
          this.shape[i].push(0);
        }

        if (blockShapes[this.blockShape].blocks[this.nextRotation] & (0x8000 >> (i * 4 + j))) {
          this.nextShape[i].push(blockShapes[this.blockShape].digit);
        } else {
          this.nextShape[i].push(0);
        }
      }
    }
  }

  renderBlock() {
    this.shape.map((row, i) => {
      row.map((cell, j) => {
        if (cell > 0) {
          this.ctx.fillStyle = blockShapes[this.blockShape].color[1];
          this.ctx.fillRect((this.x + j) * blockLength, (this.y + i) * blockLength, blockLength, blockLength);
          this.ctx.fillStyle = blockShapes[this.blockShape].color[0];
          this.ctx.fillRect(((this.x + j) * blockLength) + 4, ((this.y + i) * blockLength) + 4, blockLength - 8, blockLength - 8);
        }
      })
    })
  }
}