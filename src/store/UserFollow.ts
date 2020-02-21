const UserFollowState = {
  state: { navigation: { firstVisit: false } },
  mutations: {
    firstVisit(state: any) {
      state.navigation.firstVisit = true
    }
  },
  actions: {},
  getters: {}
}
export { UserFollowState }
