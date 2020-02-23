const GlobalState = {
  state: { global: { lang: 'fr', rpgActivated: false } },
  mutations: {
    activeRpg(state: any) {
      state.global.rpgActivated = true
    }
  },
  actions: {},
  getters: {
    isRpg: (state: any) => {
      return state.global.rpgActivated
    }
  }
}
export { GlobalState }
