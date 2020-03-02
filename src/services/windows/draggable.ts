import interact from 'interactjs'
export class Draggable {
  public interact(target: string) {
    const position = { x: 0, y: 0 }
    interact(target).draggable({
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
  public enableResize() {
    interact('.resizable').resizable({
      // resize from all edges and corners
      edges: { left: true, right: true, bottom: true, top: true },

      modifiers: [
        // keep the edges inside the parent
        interact.modifiers.restrictEdges({
          outer: 'parent'
        }),

        // minimum size
        interact.modifiers.restrictSize({
          min: { width: 100, height: 50 }
        })
      ],

      inertia: false
    })
  }
}
export const DraggableS = new Draggable()
