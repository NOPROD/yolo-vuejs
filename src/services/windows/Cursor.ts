import { Cursor } from '@/models'
export class CursorService {
  private cursor: Cursor = {}
  public setCursor() {
    console.log('hi')
  }
}
export const CursorS = new CursorService()
