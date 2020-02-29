const ExplorerState = {
  state: { explorerActiv: { components: [] } },
  mutations: {
    addProcess(state: any, process: any) {
      state.explorerActiv.components.push(process)
    },
    removeProcess(state: any, process: any) {
      state.explorerActiv.components.splice(
        state.explorerActiv.components.indexOf(process),
        1
      )
    },
    removeAllProcess(state: any) {
      state.explorerActiv.components = []
    }
  },
  actions: {},
  getters: {}
}
export { ExplorerState }
