import { SharedInstanceS } from '@/services/SharedInstance'

class UserFollow {
  private vue: Vue | null = null
  constructor() {
    this.initWithBarrels()
  }

  private initWithBarrels() {
    SharedInstanceS.getInstance$().subscribe(this.initVue)
  }

  initVue(vue: Vue) {
    this.vue = vue
  }
}
export const UserFS = new UserFollow()
