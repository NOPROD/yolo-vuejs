import { Observable } from 'rxjs'
import { MouseS } from '@/services'
export class Explorer {
  public holdRightClicksEvents(): Observable<{}> {
    return MouseS.rightClickAnyWhere$
  }
  public holdLefttClicksEvents(): Observable<{}> {
    return MouseS.leftClickAnyWhere$
  }
}
export const ExplorerS = new Explorer()
