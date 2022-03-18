import { searchContract, searchContractDetail } from '@/api/logi/sales'

export default {
  async searchContract({ commit }, date) {
    try {
      const res = await searchContract(date)
      const gridRow = res.data.gridRowJson
      commit('searchContract', gridRow)

      // return res
    } catch (err) {
      throw new Error(err)
    }
  },
  async searchContractDetail({ commit }, contractNo) {
    console.log(contractNo)
    try {
      const res = await searchContractDetail(contractNo)
      const gridRow = res.data.gridRowJson
      commit('searchContractDetail', gridRow)

      // return res
    } catch (err) {
      throw new Error(err)
    }
  },
  setTable({ commit }, tableColumns) {
    commit('setTable', tableColumns)
  },
}
