import { deleteSlip, registerSlip, selectSlip, selectSlips, editSlip} from '../../../api/account/account'

export default {
  // 전체조회
  async FETCH_ALL_SLIP({ commit }) { // 객체로 넘어오면 {}
    try {
      const { data } = await selectSlips()
      commit('SET_SILP_LIST', data.SlipList)
      return data
    } catch (err) {
      throw new Error(err)
    }
  },
  // 한개조회
  async FETCH_SLIP({ commit }, slipNo) { // 객체로 넘어오면 {}
    try {
      const { data } = await selectSlip(slipNo)
      commit('SET_SILP', data.slipForm)
      return data.slipForm
    } catch (err) {
      throw new Error(err)
    }
  },
  // 삭제
  async DELETE_SLIP(_, slipList) { // 객체로 넘어오면 {}
    try {
      return await deleteSlip(slipList)
    } catch (err) {
      throw new Error(err)
    }
  },

  // 등록
  async CREATE_SLIP(_, slip) { // 객체로 넘어오면 {}
    try {
      const response = await registerSlip(slip)

      return response.data.newSlipNo
    } catch (err) {
      throw new Error(err)
    }
  },
  async EDIT_SLIP(_, slip) { // 객체로 넘어오면 {}
    try {
      return await editSlip(slip)
    } catch (err) {
      throw new Error(err)
    }
  },

}
