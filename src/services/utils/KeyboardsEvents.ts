import { fromEvent, empty, Observable } from 'rxjs'
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators'

export class KeyboardEvents {
  private listenKeyUp(): Observable<KeyboardEvent> {
    return fromEvent<KeyboardEvent>(document, 'keyup').pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(() => {
        // call function
      })
    )
  }

  private listenKeyDown(): Observable<KeyboardEvent> {
    return fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(() => {
        // call function
      })
    )
  }
}
export const SharedInstanceS = new KeyboardEvents()
