<template>
  <div>
    <!-- 전표 모달 내용 -->
    <b-form
      v-if="modalStatus==='addSlip'"
      @submit.prevent="submitForm"
    >
      <b-row>
        <b-col md="6">
          <b-form-group
            label="기수"
            label-for="accountPeriodNo"
          >
            <b-form-input
              id="accountPeriodNo"
              v-model="slipForm.accountPeriodNo"
              disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="전표일련번호"
            label-for="slipNo"
          >
            <b-form-input
              id="slipNo"
              v-model="slipForm.slipNo"
              disabled
            />
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group
            label="전표유형"
            label-for="slipType"
          >
            <b-form-input
              id="slipType"
              v-model="slipForm.slipType"
              disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="작성자코드"
            label-for="reportingEmpCode"
          >
            <b-form-input
              id="reportingEmpCode"
              v-model="slipForm.reportingEmpCode"
              disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="품의내역"
            label-for="expenseReport"
          >
            <div class="form-label-group">
              <b-form-input
                id="expenseReport"
                v-model="slipForm.expenseReport"
              />
            </div>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label-for="reportingDate"
            label="작성날짜"
          >
            <div class="form-label-group">
              <b-form-input
                id="reportingDate"
                v-model="slipForm.reportingDate"
                type="date"
              />
            </div>
          </b-form-group>
        </b-col>
        <!-- submit and reset -->
        <b-col>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="reset"
            variant="outline-secondary"
          >
            Reset
          </b-button>
        </b-col>
      </b-row>
    </b-form>

    <!-- 분개 모달 내용 -->
    <b-form
      v-if="modalStatus==='addJounal'"
      @submit.prevent="submitForm"
    >
      <b-row>
        <b-col md="6">
          <b-form-group
            label="분개일련번호"
            label-for="journalNo"
          >
            <b-form-input
              id="journalNo"
              v-model="journalForm.journalNo"
              disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="계정코드"
            label-for="accountCode"
          >
            <b-form-input
              id="accountCode"
              v-model="journalForm.accountCode"
              list="my-list-id"
            />

          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group
            label="계정명"
            label-for="accountName"
          >
            <b-form-input
              id="accountName"
              v-model="journalForm.accountName"
              disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="대차구분"
            label-for="balanceDivision"
          >
            <b-form-select
              id="balanceDivision"
              v-model="journalForm.balanceDivision"
              :options="options"
            />

          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="거래처코드"
            label-for="customerCode"
          >
            <div class="form-label-group">
              <b-form-input
                id="customerCode"
                v-model="journalForm.customerCode"
              />
            </div>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label-for="leftDebtorPrice"
            label="차변"
          >
            <div class="form-label-group">
              <b-form-input
                id="leftDebtorPrice"
                v-model="journalForm.leftDebtorPrice"
              />
            </div>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label-for="rightCreditsPrice"
            label="대변"
          >
            <div class="form-label-group">
              <b-form-input
                id="rightCreditsPrice"
                v-model="journalForm.rightCreditsPrice"
              />
            </div>
          </b-form-group>
        </b-col>
        <!-- submit and reset -->
      </b-row>
      <b-col>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          variant="outline-secondary"
        >
          Reset
        </b-button>
      </b-col>
    </b-form>

  </div>

</template>
<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BForm, BButton, BFormSelect,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BButton,
    BFormSelect,

  },
  directives: {
    Ripple,
  },
  props: ['modalStatus'],
  data() {
    return {
      options: [
        { value: '대변', text: '대변' },
        { value: '차변', text: '차변' },
      ],
      slipForm: {
        slipNo: 'NEW',
        accountPeriodNo: '6', // 2020년은 기수일련번호 ->  4
        slipType: '결산',
        reportingDate: '',
        reportingEmpCode: sessionStorage.getItem('empCodeInfo_token'), // 작성사코드
        expenseReport: '',
        approvalDate: '',
        reportingEmpName: sessionStorage.getItem('empNameInfo_token'), // 로그인 이름
        slipStatus: '미결',
        deptCode: 'DPT-01',
        status: '',
      },

      journalForm: {
        journalNo: 'NEW',
        accountCode: '',
        accountName: '',
        balanceDivision: '',
        customerCode: '',
        customerName: '',
        leftDebtorPrice: '0',
        rightCreditsPrice: '0',
      },

    }
  },
  methods: {
    searchAccountCode() {
      console.log(2222)
    },
  },

}
</script>
