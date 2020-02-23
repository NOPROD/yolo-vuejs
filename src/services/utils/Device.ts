import { SharedInstanceS } from '@/services/SharedInstance'
import { isMobile } from 'mobile-device-detect'
export class Devices {
  private vue: Vue | null = null
  constructor() {
    this.initWithBarrels()
  }

  public isMobile(): boolean {
    return isMobile
  }

  private initWithBarrels() {
    SharedInstanceS.getInstance$().subscribe(vue => {
      this.vue = vue
    })
  }
}
export const DevicesS = new Devices()
