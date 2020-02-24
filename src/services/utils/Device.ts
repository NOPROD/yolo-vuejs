import { SharedInstanceS } from '@/services/SharedInstance'
import { isMobile } from 'mobile-device-detect'
export class Devices {
  public isMobile(): boolean {
    return isMobile
  }
}
export const DevicesS = new Devices()
