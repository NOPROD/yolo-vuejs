export interface AnimationBasic {
  repeat?: boolean
  targ?: string
  opacityInterval?: number | number[]
  easingMode?: string
  animationDuration?: number
  startDelay?: number | any
  translateX?: number
}

export interface AnimationDraw {
  className?: string
  duration?: number
  direction?: string
  stroke?: number[]
}
