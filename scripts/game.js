class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.fallingBlock = null;

    this.makeGameGrid();
    this.gameOver = true;
    this.score = 0; //inital score by every new game is 0
    this.level = 0; //default level is 0
    this.lineCleared = 0; //inital lines cleared set to 0
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

  collision(x, y, candidate = null) {
    const shape = candidate || this.fallingBlock.shape;
    const n = shape.length;
    // loop through current piece shape
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        // do next instructions only for
        // shape 'taken' squares
        if (shape[i][j] > 0) {
          const p = x + j;
          const q = y + i;
          // check if cell is in grid field
          if (p >= 0 && p < gridCols && q < gridRows) {
            // check if it's taken already
            if (this.grid[q][p] > 0) {
              return true;
            }
          } else {
            // if it's not in grid field
            return true;
          }
        }
      }
    }
    return false;
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
    // check if there is winning lane
    this.checkLines();

    // check if you need to speed up game
    this.checkLevel();
  }

  moveDown() {
    if (this.fallingBlock === null) {
      this.drawGameState();
      return
    } else if (this.collision(this.fallingBlock.x, this.fallingBlock.y + 1)) {
      const shape = this.fallingBlock.shape;
      const x = this.fallingBlock.x;
      const y = this.fallingBlock.y;
      shape.map((row, i) => {
        row.map((cell, j) => {
          let p = x + j;
          let q = y + i;
          if (p >= 0 && p < gridCols && q < gridRows && cell > 0) {
            this.grid[q][p] = shape[i][j]
          }
        })
      })
      // check for game over
      // TODO do it properly
      if (y === 0) {
        for (var i = 0; i < gridRows; i++) {
          for (var j = 0; j < gridCols; j++) {
            this.grid[i][j] = 0;
            this.gameOver = true;
          }
        }
      }

      this.fallingBlock = null;
      return
    } else {
      this.fallingBlock.y += 1;
    }
    this.drawGameState();
  }

  moveSide(right) {
    if (this.fallingBlock === null) {
      this.drawGameState();
      return
    } else if (right && this.collision(this.fallingBlock.x + 1, this.fallingBlock.y)) {
      this.drawGameState();
      return
    } else if (right && !this.collision(this.fallingBlock.x + 1, this.fallingBlock.y)) {
      this.fallingBlock.x += 1;
      this.drawGameState();
      return
    } else if (!right && this.collision(this.fallingBlock.x - 1, this.fallingBlock.y)) {
      this.drawGameState();
      return
    } else if (!right && !this.collision(this.fallingBlock.x - 1, this.fallingBlock.y)) {
      this.fallingBlock.x -= 1;
      this.drawGameState();
    }
  }
  rotate() {
    if (this.fallingBlock === null) {
      this.drawGameState();
      return
    } else if (this.collision(this.fallingBlock.x, this.fallingBlock.y, this.fallingBlock.nextShape)) {
      this.drawGameState();
      return
    } else {
      this.fallingBlock.rotation += 1;
      this.fallingBlock.decodeShape();
      this.drawGameState();
    }
  }
  checkLines() {
    let winningLine = false;
    for (var i = 0; i < this.grid.length; i++) {
      winningLine = this.grid[i].every(v => v > 0);


      if (winningLine) {
        let addScore = 40 * (this.level + 1);
        this.score += addScore;
        this.lineCleared++

        this.grid.splice(i, 1)
        this.grid.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      }
    }
  }
  checkLevel() {
    let levelCheck = this.level * 10 + 10;
    if (this.lineCleared >= levelCheck) {
      this.level++
    }
  }
  handleGameOver() {
    if (this.gameOver) {
      this.score = 0;
      this.level = 0;
      this.lineCleared = 0;
    }
  }
}