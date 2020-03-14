export class ContextMenu {
  // false : Disable context menu
  public prenventContextMenu() {
    document.oncontextmenu = function(e) {
      return false
    }
  }
}
export const ContextMenuS = new ContextMenu()
