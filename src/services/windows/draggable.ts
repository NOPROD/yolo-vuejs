import { SharedInstanceS } from '@/services/SharedInstance'
import interact from 'interactjs'
export class Draggable {
  private vue: Vue | null = null
  constructor() {
    this.initWithBarrels()
  }

  public interact() {
    const position = { x: 0, y: 0 }
    interact('.draggable').draggable({
      origin: { x: -100, y: 0 },
      startAxis: 'xy',
      listeners: {
        start(event: any) {
          console.log(event.type, event.target)
        },
        move(event: any) {
          position.x += event.dx
          position.y += event.dy

          event.target.style.transform = `translate(${position.x}px, ${position.y}px)`
        }
      }
    })
  }

  private initWithBarrels() {
    SharedInstanceS.getInstance$().subscribe(vue => {
      this.vue = vue
    })
  }
}
export const DraggableS = new Draggable()
