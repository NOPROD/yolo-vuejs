import { Observable } from 'rxjs'
import { MouseS } from '@/services'
export class Explorer {
  public holdRightClicksEvents(): Observable<string> {
    return MouseS.rightClickAnyWhere$
  }
  public holdLefttClicksEvents(): Observable<string> {
    return MouseS.leftClickAnyWhere$
  }
}
export const ExplorerS = new Explorer()
