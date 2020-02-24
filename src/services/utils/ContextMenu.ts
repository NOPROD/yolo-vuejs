export class ContextMenu {
  // false : Disable context menu
  public prenventContextMenu() {
    document.oncontextmenu = function() {
      return true
    }
  }
}
export const ContextMenuS = new ContextMenu()
