import { SharedInstanceS } from '@/services/SharedInstance'
export class RpgService {
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
export const RpgS = new RpgService()
