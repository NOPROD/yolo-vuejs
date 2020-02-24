export class ContextMenu {
  // DIsable context menu
  public prenventContextMenu() {
    document.oncontextmenu = function() {
      return true
    }
  }
}
export const ContextMenuS = new ContextMenu()
