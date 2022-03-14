<template>
  <div>
    <div>
      <MenuSlipForm
        style="justify-content: end"
        :active-button="activeButton"
        @addSlipForm="addSlip"
      />
      <h1>전표</h1>
      <b-table
        :items="setNewSlip"
        :fields="slipFiled"
      />
      <h1>분개 </h1>
      <b-table
        :items="GET_SELETED_JOURNALlIST"
        :fields="journalFiled"
        striped
        responsive
      />
      <h1>분개상세 </h1>
      <b-table
        :items="GET_SELETED_JOURNALlIST"
        :fields="detailJournalFiled"
        striped
        responsive
      />
      <div />
    </div>
    <div>
      <b-modal
        id="openAddSlipModal"
        title="전표추가"
      >
        <p class="my-5">
          <InputForm />
        </p>
      </b-modal>
    </div>
  </div>
</template>
<script>

import { BTable } from 'bootstrap-vue'
import MenuSlipForm from './MenuSlipForm.vue'
import InputForm from './InputForm.vue'

export default {
  components: {
    MenuSlipForm,
    InputForm,
    BTable,

  },

  data() {
    return {
      activeButton: 'addSlip',

      slipFiled: [
        { key: 'accountPeriodNo', label: '기수일련번호' },
        { key: 'slipNo', label: '전표일련번호' },
        { key: 'exam', label: '전표유형' },
        { key: 'reportingDate', label: '작성날짜' },
        { key: 'reportingEmpCode', label: '작성자코드' },
        { key: 'expenseReport', label: '품의내역' },
        { key: 'slipStatus', label: '승인상태' },
      ],
      journalFiled: [
        { key: 'journalNo', label: '분개일련번호' },
        { key: 'accountCode', label: '계정코드' },
        { key: 'accountName', label: '계정과목' },
        { key: 'balanceDivision', label: '대차구분' },
        { key: 'customerCode', label: '거래처코드' },
        { key: 'customerName', label: '거래처명' },
        { key: 'leftDebtorPrice', label: '차변금액' },
        { key: 'rightCreditsPrice', label: '대변금액' },
      ],
      detailJournalFiled: [
        { key: 'journalNo', label: '분개번호' },
        { key: 'accountCode', label: '코드' },
        { key: 'accountName', label: '분개상세항목' },
        { key: 'balanceDivision', label: '상세내용' },
      ],

    }
  },
  computed: {

  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
.repeater-form {
  overflow: hidden;
  transition: .35s height;
}

</style>
