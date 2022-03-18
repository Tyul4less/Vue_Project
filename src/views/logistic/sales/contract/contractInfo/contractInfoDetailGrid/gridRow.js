import { computed, ref, watch } from '@vue/composition-api'
// Notification

export default function useInvoicesList() {
  const refInvoiceListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'contractDetailNo', label: '수주상세일련번호', sortable: true },
    { key: 'mrpGatheringNo', label: '취합발주번호', sortable: true },
    { key: 'itemName', label: '품목명', sortable: true },
    { key: 'dueDateOfContract', label: '납기일', sortable: true },
    { key: 'estimateAmount', label: '견적수량', sortable: true },
    {
      key: 'stockAmountUse', label: '재고사용량', sortable: true,
    },
    { key: 'productionRequirement', label: '제작필요수량', sortable: true },
    { key: 'unitPriceOfContract', label: '견적단가', sortable: true },
    { key: 'sumPriceOfContract', label: '합계액', sortable: true },
    { key: 'operationCompletedStatus', label: '납품가능여부', sortable: true },
    { key: 'deliveryCompletionStatus', label: '납품완료여부', sortable: true },
    { key: 'description', label: '비고', sortable: true },
  ]

  const perPage = ref(10)
  const totalInvoices = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const statusFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refInvoiceListTable.value ? refInvoiceListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalInvoices.value,
    }
  })

  const refetchData = () => {
    refInvoiceListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, statusFilter], () => {
    refetchData()
  })

  return {
    tableColumns,
    perPage,
    currentPage,
    totalInvoices,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refInvoiceListTable,

    statusFilter,

    refetchData,
  }
}
