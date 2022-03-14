<template>
  <div>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
    >
      MPS 등록
    </b-button>
    <b-button-group style="float: right">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="searchContractDetailInMpsAvailable"
      >
        MPS등록 가능 조회
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        MPS 조회
      </b-button>
    </b-button-group>
    <div
      style="margin: 0 0 10px 0; float:right;"
    >
      <b-col>
        <b-form-group>
          <flat-pickr
            v-model="rangeDate"
            placeholder="시작일 & 종료일"
            class="form-control"
            :config="{ mode: 'range'}"
          />
        </b-form-group>
      </b-col>
    </div>
    <div>
      <b-editable-table
        v-model="GET_CONTRACT_DETAIL"
        hover
        :fields="fields"
      >
        <template v-slot:cell(selected)="row">
          <b-form-group>
            <input
              v-model="row.item.selected"
              type="checkbox"
            >
          </b-form-group>
        </template>

        <template v-slot:cell(mpsPlanDate)>
          <b-form-group>
            <flat-pickr
              v-model="mpsPlanDate"
              class="form-control"
            />
          </b-form-group>
        </template>

        <template v-slot:cell(scheduledEndDate)>
          <b-form-group>
            <flat-pickr
              v-model="scheduledEndDate"
              class="form-control"
            />
          </b-form-group>
        </template>

      </b-editable-table>
    </div>
  </div>
</template>

<script>
import BEditableTable from 'bootstrap-vue-editable-table'
import {
  BCol, BButtonGroup,
  BButton, BFormGroup,
} from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import Ripple from 'vue-ripple-directive'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Mps',
  components: {
    BEditableTable,
    BCol,
    flatPickr,
    BFormGroup,
    BButtonGroup,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      mpsPlanDate: null,
      scheduledEndDate: null,
      rangeDate: null,
      startDate: null,
      endDate: null,
      fields: [
        'selected',
        { key: 'contractDetailNo', label: '수주상세일련번호' },
        { key: 'contractType', label: '유형' },
        { key: 'contractDate', label: '수주일자' },
        { key: 'estimateAmount', label: '견적수량' },
        { key: 'stockAmountUse', label: '초기납품' },
        { key: 'productionRequirement', label: '제작수량' },
        { key: 'mpsPlanDate', label: '계획일자', cellEditor: 'datePicker' },
        { key: 'scheduledEndDate', label: '출하예정일', cellEditor: 'datePicker' },
        { key: 'dueDateOfContract', label: '납기일' },
        { key: 'itemName', label: '품목명' },
      ],
    }
  },
  computed: {
    ...mapGetters('logi/production', ['GET_CONTRACT_DETAIL']),
  },
  methods: {
    ...mapActions('logi/production', ['SEARCH_CONTRACT_DETAIL_IN_MPS_AVAILABLE']),
    extractDate() {
      this.startDate = this.rangeDate.split('to')[0].trim()
      this.endDate = this.rangeDate.split('to')[1].trim()
    },
    searchContractDetailInMpsAvailable() {
      if (this.rangeDate == null) {
        throw new Error('날짜부터 고르고 진행하이소')
      }
      this.extractDate()
      const payload = { searchCondition: 'contractDate', startDate: this.startDate, endDate: this.endDate }
      this.SEARCH_CONTRACT_DETAIL_IN_MPS_AVAILABLE(payload)
    },

  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
