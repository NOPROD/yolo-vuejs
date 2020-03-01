const ExplorerState = {
  state: { explorerActiv: { components: [] }, elementClicked: '' },
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
    },
    clickElement(state: any, element: string) {
      state.elementClicked = element
    }
  },
  actions: {},
  getters: {
    getElementClicked$: (state: any) => {
      return state.elementClicked
    }
  }
}
export { ExplorerState }
