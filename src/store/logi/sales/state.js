import mutations from './mutation'
import actions from './action'

export default {
  namespaced: true,
  state: {
    grid: [],
    detailGrid: [],
    tableColumns: [],
    detailTableColumns: [],
  },
  getters: {
  },

  mutations,
  actions,

}
