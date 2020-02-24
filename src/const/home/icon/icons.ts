import { IconModel } from '@/models'

export const svgFiles: any = {
  Corbeille: [
    require('@/assets/svg/icons/trash/empty_basket.svg'),
    require('@/assets/svg/icons/trash/full_basket.svg')
  ],
  Pdf: require('@/assets/svg/icons/settings/shared/files/pdf.svg'),
  Word: require('@/assets/svg/icons/settings/shared/files/word.svg')
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
