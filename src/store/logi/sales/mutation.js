export default {
  
  SEARCH_INFO(state, estimateList) {
    state.estimateList = estimateList
    console.log('뮤테이션'+JSON.stringify(state.estimateList))
  },
  
  searchContract(state, gridRow) {
    state.detailGrid = []
    state.grid = gridRow
  },
  searchContractDetail(state, gridRow) {
    state.detailGrid = gridRow
  },
  setTable(state, tableColumns) {
    state.tableColumns = tableColumns[0].tableColumns
    state.detailTableColumns = tableColumns[0].detailTableColumns
  },
  searchEstimateInContractAvailable(state, gridRow) {
    state.detailGrid = []
    state.grid = gridRow
  },
  addNewContract(state) {
    console.log(state.grid)
  },
  searchEstimateDetailInfo(state, gridRow) {
    state.detailGrid = gridRow
  },
}
