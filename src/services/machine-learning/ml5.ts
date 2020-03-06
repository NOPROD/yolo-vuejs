import { MediaElement } from 'p5'
import { of, Observable, from } from 'rxjs'
import ml5Lib from 'ml5'
export class ml5 {
  private classifier: any = null
  // MobileNet == 17mo
  public initImageClassifier(model: string, callback: any): Observable<any> {
    return from(ml5Lib.imageClassifier(model))
  }

  public initObjectDetector(
    model: MediaElement | HTMLVideoElement,
    callback: any
  ): Observable<any> {
    return from(ml5Lib.YOLO(model, null, callback))
  }
}
export const ml5S = new ml5()
