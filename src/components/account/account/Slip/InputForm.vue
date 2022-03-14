<template>
  <b-form @submit.prevent>
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
          label-for="mc-email"
          label="Email"
        >
          <div class="form-label-group">
            <b-form-input
              id="mc-email"
              type="email"
              placeholder="Email"
            />
          </div>
        </b-form-group>
      </b-col>

      <b-col cols="12">
        <b-form-group>
          <b-form-checkbox
            id="checkbox-10"
            name="checkbox-10"
            value="Remember_me"
          >
            Remember me
          </b-form-checkbox>
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
</template>

<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
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
    }
  },

}
</script>
