import { fromEvent, Observable, EMPTY, of, iif } from 'rxjs'
import { switchMap, filter, mergeMap } from 'rxjs/operators'
export class MouseEvents {
  private upLeft$: Observable<Event> = fromEvent(document, 'mouseup').pipe(
    filter((e: any) => e.which === 1)
  )
  private upRight$: Observable<Event> = fromEvent(document, 'mouseup').pipe(
    filter((e: any) => e.which === 3)
  )

  public rightClickAnyWhere$: Observable<{}> = this.upRight$.pipe(
    mergeMap((e: any) =>
      iif(
        () => e.target.nodeName === 'DIV' && e.target.className === 'home',
        of({ target: 'Home window', element: e }),
        of({ target: 'Icon', element: e })
      )
    )
  )

  public leftClickAnyWhere$: Observable<{}> = this.upLeft$.pipe(
    mergeMap((e: any) =>
      iif(
        () => e.target.nodeName === 'DIV' && e.target.className === 'home',
        of({ target: 'Home window', element: e }),
        of({ target: 'Icon', element: e })
      )
    )
  )
}
export const MouseS = new MouseEvents()
