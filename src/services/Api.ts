import { SharedInstanceS } from '@/services/SharedInstance'

class Api {
  private vue = null
  constructor() {
    this.initService()
  }

  private initService() {
    setTimeout(() => {
      this.vue = SharedInstanceS.getInstance()
      console.log(this.vue)
    }, 0)
  }
}
export const ApiService = new Api()
