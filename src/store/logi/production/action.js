import { searchContractDetailInMpsAvailable } from '@/api/logi/production'

export default {

  // MPS등록 가능 조회
  async SEARCH_CONTRACT_DETAIL_IN_MPS_AVAILABLE({ commit }, payload) { // 객체로 넘어오면 {}
    try {
      const { data } = await searchContractDetailInMpsAvailable(payload)
      commit('SET_SEARCH_CONTRACT_DETAIL_IN_MPS_AVAILABLE', data.gridRowJson[0])

      return data
    } catch (err) {
      throw new Error(err)
    }
  },
}
