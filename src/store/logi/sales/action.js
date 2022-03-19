import {
  searchContract, searchContractDetail, searchEstimateInContractAvailable, searchEstimateDetailInfo,
} from '@/api/logi/sales'

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
  async addNewContract({ commit }, contractNo) {
    console.log(contractNo)
    try {
      return
      const res = await searchContractDetail(contractNo)
      const gridRow = res.data.gridRowJson
      commit('searchContractDetail', gridRow)

      // return res
    } catch (err) {
      throw new Error(err)
    }
  },
  async searchEstimateInContractAvailable({ commit }, sendDate) {
    console.log(sendDate)
    try {
      const res = await searchEstimateInContractAvailable(sendDate)
      const gridRow = res.data.gridRowJson
      console.log(gridRow)
      commit('searchEstimateInContractAvailable', gridRow)

      // return res
    } catch (err) {
      throw new Error(err)
    }
  },
  async searchEstimateDetailInfo({ commit }, estimateNo) {
    try {
      const res = await searchEstimateDetailInfo(estimateNo)
      const gridRow = res.data.gridRowJson
      console.log(gridRow)
      commit('searchEstimateDetailInfo', gridRow)

      // return res
    } catch (err) {
      throw new Error(err)
    }
  },
}
