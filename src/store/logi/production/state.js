import mutations from './mutation'
import actions from './action'

export default {
  namespaced: true,
  state: {
    contractDetailList: {},
  },
  getters: {
    GET_CONTRACT_DETAIL(state) {
      return Array.of(state.contractDetailList)
    },
  },

  mutations,

  actions,

}
