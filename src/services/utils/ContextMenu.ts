export class ContextMenu {
  // DIsable context menu
  public prenventContextMenu() {
    document.oncontextmenu = function() {
      return false
    }
  }
}
export const ContextMenuS = new ContextMenu()
