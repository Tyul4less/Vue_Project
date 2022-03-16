<template>
  <div>
    <div>
      <MenuSlipForm
        style="justify-content: end"
        :active-button="activeButton"
        :add-bt-status="addBtStatus"
      />
      <h1>전표</h1>
      <b-table
        :items="newSlipForm"
        :fields="slipFiled"
        empty-text="없음"
      />
      <h1>분개 </h1>
      <b-table
        :items="newJournalForm"
        :fields="journalFiled"
        striped
        responsive
      />

      <h1>분개상세 </h1>
      <b-table
        :fields="detailJournalFiled"
        striped
        responsive
      />
      <div />
    </div>
    <div>
      <!-- 모달은 id 이용-->
      <!-- 전표추가 모달-->
      <!--하나의 inputForm 태그 사용 < 조건을 props로 내려줌>-->
      <b-modal
        id="openAddSlipModal"
        title="전표추가"
        @ok="completeSilpForm"
      >
        <p class="my-5">
          <InputForm
            ref="inputSlipForm"
            modal-status="addSlip"
          />
        </p>
      </b-modal>
      <!-- 분개추가 모달 -->
      <b-modal
        id="openAddJounalModal"
        title="분개추가"
        @ok="completeJounalForm"
      >
        <p class="my-5">
          <InputForm
            ref="inputJounalForm"
            modal-status="addJounal"
          />
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
    BTable,
    MenuSlipForm,
    InputForm,
  },

  data() {
    return {
      today: '',
      activeButton: 'addSlip',
      addBtStatus: false,

      slipFiled: [
        { key: 'accountPeriodNo', label: '기수일련번호' },
        { key: 'slipNo', label: '전표일련번호' },
        { key: 'slipType', label: '전표유형' },
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
      newSlipForm: [],
      newJournalForm: [],

    }
  },
  computed: {

  },
  created() {

  },
  methods: {

    // 모달 버튼제출
    completeSilpForm() {
      this.newSlipForm.push(this.$refs.inputSlipForm.slipForm)

      this.addBtStatus = true
    },
    completeJounalForm() {
      this.newJournalForm.push(this.$refs.inputJounalForm.journalForm)
    },
  },
}
</script>

<style lang="scss" scoped>
.repeater-form {
  overflow: hidden;
  transition: .35s height;
}

</style>
