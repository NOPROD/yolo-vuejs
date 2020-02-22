export class SharedInstance {
  public vue = null
  setInstance(vue: any) {
    this.vue = vue
  }
  getInstance() {
    return this.vue
  }
}
export const SharedInstanceS = new SharedInstance()
