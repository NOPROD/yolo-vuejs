class SpriteAnimationService {
  private canvas: any = null
  private ctx: any = null
  private cycleLoop: number[] = [0, 1, 0, 2]
  private currentLoopIndex: number = 0
  private framCount: number = 0
  private currentDirection: string[] = ['UP', 'LEFT', 'RIGHT', 'DOWN']
  private image: HTMLImageElement = null

  private objectSettings: {
    scale: number
    width: number
    height: number
    SCALED_WIDTH: number
    SCALED_HEIGHT: number
  } = {
    scale: 2,
    width: 16,
    height: 18,
    SCALED_HEIGHT: 2 * 18,
    SCALED_WIDTH: 2 * 16
  }

  public initImage(image: string, canvasId: string): void {
    let context = this
    this.image = new Image()
    this.image.src = image
    this.image.onload = function() {
      context.initCanvasAnimation()
    }
    this.canvas = document.querySelector(canvasId)
    this.ctx = this.canvas.getContext('2d')
  }

  private initCanvasAnimation(): void {
    console.log('img is loaded')
    if (this.ctx) this.ctx.drwImage(this.image, 0, 0, 16, 18, 0, 0, 16, 18)
  }

  private drawFrame(): void {
    this.ctx.drawImage(this.image, 0, 0, 16, 18, 0, 0, 16, 18)
  }

  private step() {
    this.framCount++

    if (this.framCount < 15) {
      window.requestAnimationFrame(this.step)
      return
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.drawFrame()
    this.currentLoopIndex++

    if (this.currentLoopIndex >= this.cycleLoop.length)
      this.currentLoopIndex = 0

    window.requestAnimationFrame(this.step)
  }

  // draw frame
  public draw(drawOptions: any) {}
}
export const SpriteAnimationS = new SpriteAnimationService()
