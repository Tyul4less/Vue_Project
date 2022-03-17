export default {
  searchContract(state, gridRow) {
    state.thisMonthDetailGrid = []
    state.thisMonthGrid = gridRow
  },
  searchContractDetail(state, gridRow) {
    state.thisMonthDetailGrid = gridRow
  },
  setTable(state, tableColumns) {
    state.tableColumns = tableColumns[0].tableColumns
    state.detailTableColumns = tableColumns[0].detailTableColumns
  },
}
