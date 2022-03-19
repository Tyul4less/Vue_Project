export default {
  SET_ACCOUNTCODE_LIST(state, accoundCodeList) {
    state.accoundCodeList = accoundCodeList
  },
  CLEAR_CODE_LIST(state) {
    console.log('ghcnf')
    state.accoundCodeList = []
  },
}
