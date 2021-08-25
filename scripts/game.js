class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.fallingBlock = null;
    this.nextFallingBlock = null;

    this.makeGameGrid();
    this.gameOver = true; //player need to start game
    this.score = 0; //inital score by every new game is 0
    this.level = 0; //default level is 0
    this.lineCleared = 0; //inital lines cleared set to 0
    this.clearAnimation = false;
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

    if (!this.clearAnimation) {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
      for (var y = 0; y < gridRows; y++) {
        for (var x = 0; x < gridCols; x++) {
          for (var block = 0; block < 7; block++) {
            // check if there is a digit assigned to grid cell value
            // and change the color to one that should be
            if (blockShapes[block].digit === this.grid[y][x]) {
              this.ctx.fillStyle = blockShapes[block].color[1];
              this.ctx.fillRect(x * blockLength, y * blockLength, blockLength, blockLength);
              this.ctx.fillStyle = blockShapes[block].color[0];
              this.ctx.fillRect((x * blockLength) + 4, (y * blockLength) + 4, blockLength - 8, blockLength - 8)
            }
          }
        }
      }
      // render block that is currently falling
      if (this.fallingBlock !== null) {
        this.fallingBlock.renderBlock();
      }
      // look for winning lines after every draw
      this.checkLines();
    }
  }

  moveDown() {
    if (this.fallingBlock === null || this.gameOver || this.clearAnimation) {
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
      if (y === 0) {
        this.clearGameGrid();
        this.handleGameOver();
        this.drawGameState();
      }

      // switch between blocks
      this.fallingBlock = this.nextFallingBlock;
      this.nextFallingBlock = null;
      return
    } else {
      this.fallingBlock.y += 1;
    }
    this.drawGameState();
  }

  moveSide(right) {
    if (this.fallingBlock === null ||
      this.clearAnimation ||
      right && this.collision(this.fallingBlock.x + 1, this.fallingBlock.y) ||
      !right && this.collision(this.fallingBlock.x - 1, this.fallingBlock.y)) {
      this.drawGameState();
      return
    } else if (right && !this.collision(this.fallingBlock.x + 1, this.fallingBlock.y)) {
      this.fallingBlock.x += 1;
      this.drawGameState();
      return
    } else if (!right && !this.collision(this.fallingBlock.x - 1, this.fallingBlock.y)) {
      this.fallingBlock.x -= 1;
      this.drawGameState();
    }
  }

  rotate() {
    if (this.fallingBlock === null ||
      this.clearAnimation ||
      this.collision(this.fallingBlock.x, this.fallingBlock.y, this.fallingBlock.nextShape)) {
      this.drawGameState();
      return
    } else {
      this.fallingBlock.rotation++;
      this.fallingBlock.nextRotation++
      this.fallingBlock.decodeShape();
      this.drawGameState();
    }
  }
  checkLines() {
    var linesState = [];
    let lineIndex = [];
    // create array of booleans if line is full then return true
    // else return false
    for (var i = 0; i < gridRows; i++) {
      let lineState = this.grid[i].every(v => v > 0);
      linesState.push(lineState);
    }

    // get all indexes of true statements
    // and save it to array of indexes
    linesState.forEach((e, i) => {
      if (e === true) {
        lineIndex.push(i);
      }
    })

    // check if there is any winning lane
    // and if there are loop through them and
    // blank them
    if (lineIndex.length > 0) {
      this.clearAnimation = true;
      lineIndex.forEach((e) => {
        // boom animation
        this.animateClear(e);


        this.grid.splice(e, 1)
        this.grid.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      })
    }

    // handle score statements -> more in todo.md
    if (lineIndex.length === 4) {
      let addScore = 1200 * (this.level + 1);
      this.score += addScore;
      this.lineCleared += 4;

    } else if (lineIndex.length === 3) {
      let addScore = 300 * (this.level + 1);
      this.score += addScore;
      this.lineCleared += 3;

    } else if (lineIndex.length === 2) {
      let addScore = 100 * (this.level + 1);
      this.score += addScore;
      this.lineCleared += 2;

    } else if (lineIndex.length === 1) {
      let addScore = 40 * (this.level + 1);
      this.score += addScore;
      this.lineCleared++

    }
  }
  checkLevel() {
    let levelCheck = this.level * 10 + 10;
    if (this.lineCleared >= levelCheck) {
      this.level++
    }

    if (this.level > 19 && levelArray[this.level] === undefined) {
      levelArray.push(20)
    }
  }
  clearGameGrid() {
    for (var i = 0; i < gridRows; i++) {
      for (var j = 0; j < gridCols; j++) {
        this.grid[i][j] = 0;
      }
    }
  }
  handleGameOver() {
    this.handleScoreboard();

    this.nextFallingBlock = null;
    this.fallingBlock = null;
    this.gameOver = true;
    this.score = 0;
    this.level = 0;
    this.lineCleared = 0;
  }

  handleScoreboard() {
    var scoreArr = [];
    if (localStorage.getItem('scores')) {
      var storedArr = localStorage.getItem('scores');
      var scoreArr = JSON.parse(storedArr);
    }
    scoreArr.push(this.score);
    localStorage.setItem("scores", JSON.stringify(scoreArr));
  }
  animateClear(e) {
    const clearEffect = new clearLineEffect(this.ctx, e);
    this.clearAnimation = clearEffect.animationState;
    const animationInterval = setInterval(() => {
      if (clearEffect.animationState) {
        clearEffect.animate()
      } else {
        this.clearAnimation = clearEffect.animationState;
        clearInterval(animationInterval);
      }
    }, 3);
  }
}