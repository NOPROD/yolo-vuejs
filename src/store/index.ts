import Vue from 'vue'
import Vuex from 'vuex'
import { AnimeS } from '@/services'
import { AnimationState } from './Animation'
import { GlobalState } from './GlobalState'
import { UserFollowState } from './UserFollow'
import { ExplorerState } from './apps/explorer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { AnimationState, GlobalState, UserFollowState, ExplorerState },
  state: {},
  mutations: {},
  actions: {},
  getters: {
    getByModule: (state: any) => (modules: string) => {
      return state[modules]
    }
  }
})
