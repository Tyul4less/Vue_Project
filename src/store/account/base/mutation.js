export default {
  // 계정코드 셋팅
  SET_ACCOUNTCODE_LIST(state, accoundCodeList) {
    state.accoundCodeList = accoundCodeList
  },
  // 계정코드 지우기
  CLEAR_CODE_LIST(state) {
    state.accoundCodeList = []
  },
  // 거래처 셋팅
  SET_ACCOUNT_CUSTOMER_LIST(state, accountCustomerList) {
    state.accountCustomerList = accountCustomerList
  },
  CLEAR_CUSTOMER_CODE_LIST(state) {
    state.accountCustomerList = []
  },

  // 분개상세 코드 찾기
  SET_ACCOUNT_CONTROLL_CODE_LIST(state, accountControllCodeList) {
    state.accountControllCodeList = accountControllCodeList
  },
  // 초기화
  CLEAR_ACCOUNT_CONTROLL_CODE_LIST(state) {
    state.accountControllCodeList = []
  },

}
