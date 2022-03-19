import { searchEstimateInfo } from '@/api/logi/sales'

export default {
  async SEARCH_ESTIMATE_INFO({ commit }, payload) { // 객체로 넘어오면 {}
    // console.log("오나")
    // console.log(payload)
    try {
      const { data } = await searchEstimateInfo(payload)
      console.log(JSON.stringify(data))
      console.log(data.gridRowJson[0])
      commit('SEARCH_INFO', data.gridRowJson) /* field가 맵핑하는게 배열이기 때문에 그대로 보내줌 */
      return data
    } catch (err) {
      throw new Error(err)
    }
  },
  /* async DELETE_SLIP(_, slipList) { // 객체로 넘어오면 {}
    try {
      const response = await deleteSlip(slipList)
      console.log(1)
      return response
    } catch (err) {
      throw new Error(err)
    }
  }, */

}
