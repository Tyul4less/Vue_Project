<template>
  <div>
    <div>
      <b-form
        ref="form"
        :style="{height: trHeight}"
        class="repeater-form"
        @submit.prevent="repeateAgain"
      >

        <!-- Row Loop -->
        <b-row
          v-for="(item, index) in items"
          :id="item.id"
          :key="item.id"
          ref="row"
        >

          <!-- Item Name -->
          <b-col md="2">
            <b-form-group
              label="기수"
              label-for="accountPeriodNo"
            >
              <b-form-input
                id="accountPeriodNo"
                type="number"
                placeholder="32"
              />
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group
              label="전표일련번호"
              label-for="slipNo"
            >
              <b-form-input
                id="slipNo"
                type="text"
                placeholder="NEW"
              />
            </b-form-group>
          </b-col>

          <!-- Cost -->

          <!-- Quantity -->
          <b-col md="2">
            <b-form-group
              label="전표유형"
              label-for="slipType"
            >
              <b-form-input
                id="slipType"
                type="number"
                placeholder="1"
              />
            </b-form-group>
          </b-col>

          <!-- Profession -->

          <!-- Profession -->
          <b-col md="2">
            <b-form-group
              label="작성자"
              label-for="reportingEmpName"
            >
              <b-form-input
                id="reportingEmpName"
                type="text"
                placeholder="1"
              />
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group
              label="신청날짜"
              label-for="reportingDate"
            >
              <b-form-input
                id="reportingDate"
                type="date"
                placeholder="1"
              />
            </b-form-group>
          </b-col>
          <!-- Profession -->
          <b-col md="2">
            <b-form-group
              label="결제상태"
              label-for="slipStatus"
            >
              <b-form-input
                id="slipStatus"
                type="text"
                placeholder="미결"
              />
            </b-form-group>
          </b-col>

          <!-- Remove Button -->
          <b-col
            lg="2"
            md="3"
            class="mb-50"
          >
            <b-button
              v-ripple.400="'rgba(234, 84, 85, 0.15)'"
              variant="outline-danger"
              class="mt-0 mt-md-2"
              @click="removeItem(index)"
            >
              <feather-icon
                icon="XIcon"
                class="mr-25"
              />
              <span>Delete</span>
            </b-button>
          </b-col>
          <b-col cols="12">
            <hr>
          </b-col>
        </b-row>

      </b-form>
    </div>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      @click="repeateAgain"
    >
      <feather-icon
        icon="PlusIcon"
        class="mr-25"
      />
      <span>Add New</span>
    </b-button>
  </div>
</template>

<script>
import {
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton,
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BForm,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      items: [{
        id: 1,
        slipNo: 'NEW',
        accountPeriodNo: '5', // 2020년은 기수일련번호 ->  4
        slipType: '결산',
        reportingDate: '',
        reportingEmpCode: sessionStorage.getItem('empCodeInfo_token'), // 작성사코드
        expenseReport: '',
        approvalDate: '',
        reportingEmpName: sessionStorage.getItem('empNameInfo_token'), // 로그인 이름
        slipStatus: '미결',
        deptCode: 'DPT-01',
        status: '',
      }],
      nextTodoId: 2,

    }
  },
  mounted() {
    this.initTrHeight()
  },
  created() {
    window.addEventListener('resize', this.initTrHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.initTrHeight)
  },
  methods: {
    // 추가
    repeateAgain() {
      this.items.push({
        id: this.nextTodoId += this.nextTodoId,
      })

      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    removeItem(index) {
      this.items.splice(index, 1)
      this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },
    initTrHeight() {
      this.trSetHeight(null)
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form.scrollHeight)
      })
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
