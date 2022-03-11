import { selectSlip, deleteSlip } from '@/api/account/account'

export default {
  async FETCH_ALL_SLIP({ commit }) { // 객체로 넘어오면 {}
    const { data } = await selectSlip()

    commit('SET_SILP', data.SlipList)
    return data
  },
  async DELETE_SLIP(_, slipList) { // 객체로 넘어오면 {}
    try {
      const response = await deleteSlip(slipList)
      console.log(1)
      return response
    } catch (err) {
      throw new Error(err)
    }
  },

}
