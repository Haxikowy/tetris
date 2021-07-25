class Block {
  constructor(ctx, blockShape, rotation) {
    this.ctx = ctx;
    this.blockShape = blockShape;
    this.rotation = rotation;

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
    let nextRotation = this.rotation + 1;
    if (this.rotation > 3) {
      this.rotation = 0;
    }
    if (nextRotation > 3) {
      nextRotation = 0;
    }

    for (var i = 0; i < 4; i++) {
      this.shape.push([]);
      this.nextShape.push([]);
      for (var j = 0; j < 4; j++) {
        if (blockShapes[this.blockShape].blocks[this.rotation] & (0x8000 >> (i * 4 + j))) {
          this.shape[this.shape.length - 1].push(blockShapes[this.blockShape].digit);
        } else {
          this.shape[this.shape.length - 1].push(0);
        }

        if (blockShapes[this.blockShape].blocks[nextRotation] & (0x8000 >> (i * 4 + j))) {
          this.nextShape[this.nextShape.length - 1].push(blockShapes[this.blockShape].digit);
        } else {
          this.nextShape[this.nextShape.length - 1].push(0);
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