<template>
  <div>
    <contract-info-grid>
      <template v-slot:datepicker>
        <h2
          class="mb-md-1"
          style="width: 50px"
        >
          수주
        </h2>
        <b-input-group
          class="mb-md-1"
          style="width: 170px; margin: 0 10px 0 10px;"
        >
          <b-form-input
            v-model="startDate"
            type="text"
            placeholder="YYYY-MM-DD"
            autocomplete="off"
            show-decade-nav
          />
          <b-input-group-append style="height: 37px;">
            <b-form-datepicker
              v-model="startDate"
              show-decade-nav
              button-only
              button-variant="outline-primary"
              right
              size="sm"
              locale="en-US"
              aria-controls="example-input"
            />
          </b-input-group-append>
        </b-input-group>

        <h2 style="color:#7367f0">
          ~
        </h2>

        <b-input-group
          class="mb-md-1"
          style="width: 170px; margin: 0 10px 0 10px;"
        >
          <b-form-input
            v-model="endDate"
            type="text"
            placeholder="YYYY-MM-DD"
            autocomplete="off"
            show-decade-nav
          />
          <b-input-group-append style="height: 37px;">
            <b-form-datepicker
              v-model="endDate"
              show-decade-nav
              button-only
              button-variant="outline-primary"
              right
              size="sm"
              locale="en-US"
              aria-controls="example-input"
            />
          </b-input-group-append>
        </b-input-group>
        <b-button
          variant="primary"
          size="md"
          class="mb-md-1"
          @click="searchContract('searchByDate')"
        >
          검색
        </b-button>

        <b-form-input
          id="company-code"
          v-model="companyCode"
          disabled
          name="companyCode"
          placeholder="companyCode"
          style="width: 150px"
          class="mb-md-1 ml-1"
        />
        <b-button
          v-b-modal.companyCode
          variant="primary"
          size="md"
          class="mb-md-1 ml-1"
          @click="searchCustomerCode"
        >
          회사코드로 검색
        </b-button>
        <b-modal
          id="companyCode"
          scrollable
          title="Scrollable Content"
          cancel-variant="outline-secondary"
        >
          <template>
            <BEditableTable
              hover
              selectable
              :select-mode="'single'"
              :items="companyInfo"
              @row-clicked="companyCodeClick"
            />
          </template>
        </b-modal>

      </template>
    </contract-info-grid>
    <contract-detail-info-grid />
  </div>
</template>

<script>
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination, BTooltip, BFormDatepicker, BInputGroup, BInputGroupAppend,
} from 'bootstrap-vue'
import BEditableTable from 'bootstrap-vue-editable-table'
import contractInfoGrid from '@/views/logistic/sales/contract/contractInfo/contractInfoGrid/contractInfoGrid'
import contractDetailInfoGrid from '@/views/logistic/sales/contract/contractInfo/contractInfoDetailGrid/contractDetailInfoGrid'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BTooltip,
    BFormDatepicker,
    BInputGroup,
    BInputGroupAppend,
    BEditableTable,

    contractInfoGrid,
    contractDetailInfoGrid,
  },
  computed: {
    ...mapState({
      thisMonthGrid: state => state.logi.sales.thisMonthGrid,
      companyInfo: state => state.auth.companyInfo,
    }),
  },
  created() {
    this.searchCustomerCode()
  },
  data: () => ({
    startDate: '0000-00-0',
    endDate: '0000-00-0',
    selected: '',
    workplaceName: '',
    workplaceCode: '',
    searchWorkplace: '',
    companyCode: 'PTN-01',
  }),
  mounted() {
    // eslint-disable-next-line new-cap
    const tableColumns = [{
      tableColumns: [
        { key: 'contractNo', label: '수주일련번호', sortable: true },
        { key: 'estimateNo', label: '견적일련번호', sortable: true },
        { key: 'contractTypeName', label: '수주유형분류', sortable: true },
        { key: 'estimateDate', label: '견적일자', sortable: true },
        { key: 'contractDate', label: '수주일자', sortable: true },
        { key: 'contractRequester', label: '수주요청자', sortable: true },
        { key: 'empNameInCharge', label: '수주담당자명', sortable: true },
        { key: 'deliveryCompletionStatus', label: '납품완료여부', sortable: true },
        { key: 'description', label: '비고', sortable: false },
      ],
      detailTableColumns: [
        { key: 'contractDetailNo', label: '수주상세일련번호', sortable: true },
        { key: 'mrpGatheringNo', label: '취합발주번호', sortable: true },
        { key: 'itemName', label: '품목명', sortable: true },
        { key: 'dueDateOfContract', label: '납기일', sortable: true },
        { key: 'estimateAmount', label: '견적수량', sortable: true },
        { key: 'stockAmountUse', label: '재고사용량', sortable: true },
        { key: 'productionRequirement', label: '제작필요수량', sortable: true },
        { key: 'unitPriceOfContract', label: '견적단가', sortable: true },
        { key: 'sumPriceOfContract', label: '합계액', sortable: true },
        { key: 'operationCompletedStatus', label: '납품가능여부', sortable: true },
        { key: 'deliveryCompletionStatus', label: '납품완료여부', sortable: true },
        { key: 'description', label: '비고', sortable: true },
      ],
    },
    ]
    this.$store.dispatch('logi/sales/setTable', tableColumns)

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const lastday = new Date(year, month, 0).getDate()
    this.startDate = `${year}-${month}-01`
    this.endDate = `${year}-${month}-${lastday}`

    this.searchContract('searchByDate')
  },
  methods: {
    ...mapActions('logi/sales', ['searchCustomerCode']),
    ...mapActions('auth', ['GET_COMPANY_CODE', 'GET_WORKPLACE_CODE', 'AUTHORITY_REQUEST']),
    searchContract(searchType) {
      const searchCondition = searchType
      const sendDate = {
        startDate: this.startDate, endDate: this.endDate, customerCode: this.companyCode, searchCondition,
      }
      this.$store.dispatch('logi/sales/searchContract', sendDate)
    },
    companyCodeClick(payload) {
      console.log('companyClick')
      this.companyCode = payload.companyCode
      this.searchContract('searchByCustomer')
    },
  },
}
</script>

<style lang="scss" scoped>

</style>

<style lang="scss">

</style>
