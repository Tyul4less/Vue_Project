import { fetchAccountCode } from '@/api/account/base'

export default {
  // 전체조회
  async FETCH_ACCOUNT_CODE({ commit }, searchCode) { // 객체로 넘어오면 {}
    try {
      const { data } = await fetchAccountCode(searchCode)
      commit('SET_ACCOUNTCODE_LIST', data.accoundCodeList)
      return data
    } catch (err) {
      throw new Error(err)
    }
  },

}
