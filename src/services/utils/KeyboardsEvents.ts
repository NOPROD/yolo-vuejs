import { fromEvent, Observable, EMPTY, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'
export class KeyboardEvents {
  private keyDowns$ = fromEvent<KeyboardEvent>(document, 'keydown')
  private keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')

  //* todo: fix double tab event /
  public listenHoldKey(): Observable<KeyboardEvent> {
    return this.keyDowns$.pipe(
      switchMap(pressedKeyEvent => (pressedKeyEvent ? this.keyUp$ : EMPTY))
    )
  }
}
export const KeyboardS = new KeyboardEvents()
