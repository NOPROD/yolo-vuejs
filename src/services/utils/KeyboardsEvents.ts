import { fromEvent, Observable, EMPTY, of } from 'rxjs'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { SharedInstanceS } from '@/services/SharedInstance'
export class KeyboardEvents {
  private vue: Vue | null = null
  private keyDowns$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    debounceTime(150),
    distinctUntilChanged()
  )
  private keyUp$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
    debounceTime(150),
    distinctUntilChanged()
  )
  constructor() {
    this.initWithBarrels()
  }

  //* todo: fix double tab event /
  public listenHoldKey(): Observable<KeyboardEvent> {
    return this.keyDowns$.pipe(
      switchMap(pressedKeyEvent => (pressedKeyEvent ? this.keyUp$ : EMPTY))
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
