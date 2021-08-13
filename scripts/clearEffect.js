class clearLineEffect {
  constructor(ctx, yLine) {
    this.iterator = 0;
    this.frames = 0;
    this.animationState = true;
    this.img = document.getElementById('clearEffectIMG');

    this.ctx = ctx;
    this.yLine = yLine;
    this.animate();
  }

  animate() {
    if (this.iterator < 0) {
      this.ctx.clearRect(0, blockLength * this.yLine, this.ctx.canvas.width, blockLength)
      this.animationState = false;
      return
    }

    var nextImg = this.iterator * 30;

    if (this.frames <= 14) {
      this.ctx.clearRect(0, blockLength * this.yLine, this.ctx.canvas.width, blockLength)
      this.ctx.drawImage(
        this.img, //what to put
        0, nextImg,
        300, 30,
        0, blockLength * this.yLine,
        300, 30
      )

      this.iterator++;
      this.frames++;

    } else if (this.frames > 14) {
      if (this.iterator === 15) {
        this.iterator = 14;
      }
      this.ctx.clearRect(0, blockLength * this.yLine, this.ctx.canvas.width, blockLength)
      this.ctx.drawImage(
        this.img, //what to put
        0, nextImg,
        300, 30,
        0, blockLength * this.yLine,
        300, 30
      )

      this.iterator--;
      this.frames++;
    }
  }
}