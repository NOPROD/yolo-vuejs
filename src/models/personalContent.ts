export interface PersonnalContent {
  title: string
  subContent: SubPersonnalContent[]
}

export interface SubPersonnalContent {
  subTitle: string
  subContent: string
  subPictures: any
  subCallBack: any
  subAnimation: any
}
