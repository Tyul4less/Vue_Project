// 상태 변경 리엑트의 reducer느낌

export default {

  SEARCH_INFO(state, estimateList) {
    state.estimateList = estimateList
    console.log('뮤테이션'+JSON.stringify(state.estimateList))
  },

}
