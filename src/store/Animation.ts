const AnimationState = {
  state: { anim: { backgroundAnimated: false } },
  mutations: {
    animateBackground(state: any) {
      state.anim.backgroundAnimated = true
    }
  },
  actions: {},
  getters: {}
}
export { AnimationState }
