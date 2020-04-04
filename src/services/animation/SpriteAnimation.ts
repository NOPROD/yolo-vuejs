class SpriteAnimationService {
  private canvas = null
  private ctx: any = null

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

  public setCanvas(id: any) {
    this.canvas = document.querySelector(id)
    this.ctx = this.canvas.getContext('2d')
  }

  // Draw svg //
  public draw(drawOptions: any) {}
}
export const SpriteAnimationS = new SpriteAnimationService()
