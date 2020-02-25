import { filter, mergeMap } from 'rxjs/operators'
import { fromEvent, of, iif, Observable } from 'rxjs'

export class Explorer {
  private iconsEvents$: Observable<Event> = fromEvent<KeyboardEvent>(
    document.getElementsByClassName('home_icon'),
    'clickright'
  )
  private upLeft$: Observable<Event> = fromEvent(document, 'mouseup').pipe(
    filter((e: any) => e.which === 1)
  )
  private upRight$: Observable<Event> = fromEvent(document, 'mouseup').pipe(
    filter((e: any) => e.which === 3)
  )

  public rightClickAnyWhere$: Observable<string> = this.upRight$.pipe(
    mergeMap((e: any) =>
      iif(
        () => e.target.nodeName === 'DIV' && e.target.className === 'home',
        of('Home window'),
        of('Icon')
      )
    )
  )
}
export const ExplorerS = new Explorer()
