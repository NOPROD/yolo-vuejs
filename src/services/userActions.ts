import { SharedInstanceS } from '@/services/SharedInstance'

class UserService {
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
export const UserS = new UserService()
