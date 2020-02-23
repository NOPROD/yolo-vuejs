import { SharedInstanceS } from '@/services/SharedInstance'
export class Terminal {
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
export const TerminalS = new Terminal()
