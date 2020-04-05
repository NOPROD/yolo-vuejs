import anime from 'animejs/lib/anime.es'
import { AnimationDraw } from '@/models'

class AnimeService {
  private vue: Vue | null = null

  // Draw svg //
  public draw(drawOptions: AnimationDraw) {
    anime({
      targets: drawOptions.className,
      strokeDashoffset: drawOptions.stroke,
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el: any, i: any) {
        return i * 250
      },
      direction: drawOptions.direction ? drawOptions.direction : 'alternate',
      loop: false
    })
  }

  public drawLine(target: string) {
    anime.timeline({ loop: false }).add({
      targets: target,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      stroke: '#808080',
      duration: 700,
      delay: function(el: any, i: any) {
        return i * 250
      },
      direction: 'alternate'
    })
  }

  public unDrawLine(target: string) {
    anime.timeline({ loop: false }).add({
      targets: target,
      strokeDashoffset: [0, anime.setDashoffset],
      easing: 'easeInOutSine',
      stroke: '#808080',
      duration: 700,
      delay: function(el: any, i: any) {
        return i * 250
      },
      direction: 'alternate'
    })
  }

  public getAnime() {
    return anime
  }
}
export const AnimeS = new AnimeService()
