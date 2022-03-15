import mutations from './mutation'
import actions from './action'

export default {
  namespaced: true,
  state: {
    thisMonthGrid: [],
    thisMonthDetailGrid: [],
    tableColumns: [],
    detailTableColumns: [],
  },
  getters: {
  },

  mutations,
  actions,

}
