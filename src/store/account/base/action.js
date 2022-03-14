import { selectAccountCode } from '@/api/account/base'

export default {
  // 전체조회
  async FETCH_ACCOUNT_CODE({ commit }) { // 객체로 넘어오면 {}
    try {
      console.log('액션')
      const { data } = await selectAccountCode()
      commit('SET_SILP_LIST', data.SlipList)
      return data
    } catch (err) {
      throw new Error(err)
    }
  },

}
