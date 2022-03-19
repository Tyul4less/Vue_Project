import account from './account/state'
import base from './base/state'

export default {
  namespaced: true,
  modules: {
    account,
    base,
  },
  state: {
    connect: false,
  },
  getters: {
  },
  mutations: {
  },
}
