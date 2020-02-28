import { BehaviorSubject, Observable } from 'rxjs'
import { MouseS } from '@/services'
import { ContextMenuModel } from '@/models'
import { ClicksModel } from '@/models'

export class ContextMenu {
  private contextContent: BehaviorSubject<
    ContextMenuModel
  > = new BehaviorSubject({ component: {}, target: {} })
  private contextContent$: Observable<
    ContextMenuModel
  > = this.contextContent.asObservable()
  // false : Disable context menu
  public holdClickActions(callBackLeft: any, callBackRight: any): ClicksModel {
    return {
      leftClick: MouseS.leftClickAnyWhere$.subscribe(callBackLeft),
      rightClick: MouseS.rightClickAnyWhere$.subscribe(callBackRight)
    }
  }

  public getContext(): Observable<ContextMenuModel> {
    return this.contextContent$
  }

  public setContext(context: ContextMenuModel): void {
    this.contextContent.next(context)
  }
}
export const ContextMenuES = new ContextMenu()
