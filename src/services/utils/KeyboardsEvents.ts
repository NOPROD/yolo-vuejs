import { fromEvent, Observable } from 'rxjs'
import {
  debounceTime,
  distinctUntilChanged,
  publish,
  refCount
} from 'rxjs/operators'
import { SharedInstanceS } from '@/services/SharedInstance'
export class KeyboardEvents {
  private vue: Vue | null = null
  constructor() {
    this.initWithBarrels()
  }
  public listenKeyUp(): Observable<KeyboardEvent> {
    return fromEvent<KeyboardEvent>(document, 'keyup').pipe(
      debounceTime(150),
      distinctUntilChanged()
    )
  }

  public listenKeyDown(): Observable<KeyboardEvent> {
    return fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      debounceTime(150),
      distinctUntilChanged()
    )
  }

  private initWithBarrels() {
    SharedInstanceS.getInstance$().subscribe(this.initVue)
  }

  initVue(vue: Vue) {
    this.vue = vue
  }
}
export const KeyboardS = new KeyboardEvents()
