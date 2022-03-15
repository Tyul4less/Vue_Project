<template>
  <div>
    <!-- B테이블에는 ARRAY가 들어가야한다-->
    <h1>전표</h1>
    <b-table
      :items="GET_SELETED_SLIP"
      :fields="slipFiled"
    />
    <h1>분개 및 분개상세</h1>

    <b-table
      :items="GET_SELETED_JOURNALlIST"
      :fields="journalFiled"
      striped
      responsive
    >
      <template #cell(show_details)="row">
        <b-form-checkbox
          v-model="row.detailsShowing"
          plain
          class="vs-checkbox-con"
          @change="row.toggleDetails"
        >
          <span class="vs-checkbox">
            <span class="vs-checkbox--check">
              <i class="vs-icon feather icon-check" />
            </span>
          </span>
          <span class="vs-label">{{ row.detailsShowing ? 'Hide' : 'Show' }}</span>
        </b-form-checkbox>
      </template>

      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col
              md="4"
              class="mb-1"
            >
              <strong>분개번호 : </strong>{{ row.item.journalDetailList[0].journalDetailNo }}
            </b-col>
            <b-col
              md="4"
              class="mb-1"
            >
              <strong>코드 : </strong>{{ row.item.journalDetailList[0].accountControlType }}
            </b-col>
            <b-col
              md="4"
              class="mb-1"
            >
              <strong>분개상세항목 : </strong>{{ row.item.journalDetailList[0].accountControlName }}
            </b-col>
            <b-col
              md="4"
              class="mb-1"
            >
              <strong>상세내용 : </strong>{{ row.item.journalDetailList[0].journalDescription }}
            </b-col>

          </b-row>

          <b-button
            size="sm"
            variant="outline-secondary"
            @click="row.toggleDetails"
          >
            Hide Details
          </b-button>
        </b-card>
      </template>

      <template #cell(status)="data">
        <b-badge :variant="status[1][data.value]">
          {{ status[0][data.value] }}
        </b-badge>
      </template>
    </b-table>
  </div>
</template>

<script>
import {
  BTable, BFormCheckbox, BButton, BCard, BRow, BCol, BBadge,
} from 'bootstrap-vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    BTable,
    BButton,
    BFormCheckbox,
    BCard,
    BRow,
    BCol,
    BBadge,

  },

  data() {
    return {
      slipFiled: [
        { key: 'slipNo', label: '전표일련번호' },
        { key: 'accountPeriodNo', label: '기수일련번호' },
        { key: 'expenseReport', label: '품의내역' },
        { key: 'reportingDate', label: '작성날짜' },
        { key: 'slipStatus', label: '승인상태' },
      ],
      journalFiled: [
        'show_details',
        { key: 'journalNo', label: '분개번호' },
        { key: 'accountCode', label: '계정코드' },
        { key: 'accountName', label: '계정과목' },
        { key: 'balanceDivision', label: '대차구분' },
        { key: 'customerCode', label: '거래처코드' },
        { key: 'customerName', label: '거래처명' },
        { key: 'leftDebtorPrice', label: '차변금액' },
        { key: 'rightCreditsPrice', label: '대변금액' },
        { key: 'status', label: '승인상태' }],

      status: [{
        normal: '승인', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',
      },
      {
        normal: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',
      }],
      seletedSlip: [],
    }
  },
  computed: {
    ...mapGetters('account/account', ['GET_SELETED_SLIP', 'GET_SELETED_JOURNALlIST']),
  },

}
</script>
<style scoped>
h1 {
font-size: 45px;
font-weight: 600;
color: #456155;
padding: 30px 5px 15px;
}
</style>
