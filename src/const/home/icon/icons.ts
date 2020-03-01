import { IconModel } from '@/models'
import EmptyBasketSvg from '@/assets/svg/icons/trash/empty_basket.svg'
import FullBasketSvg from '@/assets/svg/icons/trash/full_basket.svg'
import PdfSvg from '@/assets/svg/icons/settings/shared/files/pdf.svg'
import WordSvg from '@/assets/svg/icons/settings/shared/files/word.svg'

export const svgFiles: any = {
  Corbeille: [EmptyBasketSvg, FullBasketSvg],
  Pdf: PdfSvg,
  Word: WordSvg
}
export const IconsConst: IconModel[] = [
  {
    title: 'Corbeille',
    img: svgFiles['Corbeille']
  },
  {
    title: 'Pdf',
    img: svgFiles['Pdf']
  },
  {
    title: 'Word',
    img: svgFiles['Word']
  }
]
