import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { share } from 'rxjs/operators'

export class SharedInstance {
  public vue: BehaviorSubject<Vue | any> = new BehaviorSubject(null)
  private vue$: Observable<Vue | any> = new Subject()
  constructor() {
    this.vue$ = this.vue.pipe(share())
  }

  setInstance(vue: any) {
    this.vue.next(vue)
  }
  getInstance$() {
    return this.vue$
  }
}
export const SharedInstanceS = new SharedInstance()
