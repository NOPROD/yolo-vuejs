const GlobalState = {
  state: { global: { lang: 'fr', rpgActivated: false } },
  mutations: {
    activeRpg(state: any) {
      state.globalState.rpgActivated = true
    }
  },
  actions: {
    changeLang(context: any, lang: string) {
      context.state.globalState.lang = lang
    }
  },
  getters: {}
}
export { GlobalState }
