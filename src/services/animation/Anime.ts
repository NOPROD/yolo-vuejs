import { SharedInstanceS } from '@/services/SharedInstance'
import { anime } from 'animejs/lib/anime.es'
import { AnimationDraw } from '@/models'

class AnimeService {
  private vue: Vue | null = null
  constructor() {
    this.initWithBarrels()
  }

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

  private initWithBarrels() {
    SharedInstanceS.getInstance$().subscribe(this.initVue)
  }

  initVue(vue: Vue) {
    this.vue = vue
  }
}
export const AnimeS = new AnimeService()
