import Parallax from 'parallax-js'

class ParallaxS {
  getInstance(element: any) {
    return new Parallax(element)
  }
}
export const parallaxS = new ParallaxS()
