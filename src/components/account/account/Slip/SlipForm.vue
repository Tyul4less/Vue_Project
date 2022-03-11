<template>
  <div>
    <div class="custom-search">
      <MenuSlipForm @deleteItem="deleteSlip" />
      <!-- advance search input -->
      <b-row>
        <b-col md="4">
          <b-form-group>
            <label>전표일련번호</label>
            <b-form-input
              placeholder="Search"
              type="text"
              class="d-inline-block"
              @input="advanceSearch"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group>
            <label>작성날짜:</label>
            <b-form-input
              placeholder="Search"
              type="text"
              class="d-inline-block"
              @input="advanceSearch"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group>
            <label>승인상태:</label>
            <b-form-input
              placeholder="Search"
              type="text"
              class="d-inline-block"
              @input="advanceSearch"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </div>

    <!-- table -->
    <vue-good-table
      :columns="columns"
      :rows="slipFormList"
      :rtl="direction"
      :search-options="{
        enabled: true,
        externalQuery: searchTerm }"
      :select-options="{
        enabled: true,
        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
        selectionInfoClass: 'custom-class',
        selectionText: 'rows selected',
        clearSelectionText: 'clear',
        disableSelectInfo: true, // disable the select info panel on top
        selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
      }"
      :pagination-options="{
        enabled: true,
        perPage:pageLength
      }"
      theme="my-theme"
      @on-row-click="onRowClick"
    >
      <template
        slot="table-row"
        slot-scope="props"
      >
        <span
          v-if="props.column.field === 'fullName'"
          class="text-nowrap"
        >
          <b-avatar
            :src="props.row.avatar"
            class="mx-1"
          />
          <span>{{ props.row.fullName }}</span>
        </span>
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>

      <!-- pagination -->
      <template
        slot="pagination-bottom"
        slot-scope="props"
      >
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex align-items-center mb-0 mt-1">
            <span class="text-nowrap">
              Showing 1 to
            </span>
            <b-form-select
              v-model="pageLength"
              :options="['10','20','30']"
              class="mx-1"
              @input="(value)=>props.perPageChanged({currentPerPage:value})"
            />
            <span class="text-nowrap"> of {{ props.total }} entries </span>
          </div>
          <div>
            <b-pagination
              :value="1"
              :total-rows="props.total"
              :per-page="pageLength"
              first-number
              last-number
              align="right"
              prev-class="prev-item"
              next-class="next-item"
              class="mt-1 mb-0"
              @input="(value)=>props.pageChanged({currentPage:value})"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>
          </div>
        </div>
      </template>
    </vue-good-table>

  </div>
</template>

<script>
import MenuSlipForm from '@/components/account/account/Slip/MenuSlipForm.vue'
import {
  BAvatar, BPagination, BFormGroup, BFormInput, BFormSelect, BRow, BCol,
} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'
import { mapState } from 'vuex'
import Vue from 'vue'

export default {
  components: {
    VueGoodTable,
    BAvatar,
    BPagination,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BRow,
    BCol,
    MenuSlipForm,

    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },

  data() {
    return {

      pageLength: 10,
      dir: false,

      columns: [
        {
          label: '전표일련번호',
          field: 'slipNo',
        },
        {
          label: '기수일련번호',
          field: 'accountPeriodNo',
        },
        {
          label: '품의내역',
          field: 'expenseReport',
        },
        {
          label: '작성날짜',
          field: 'reportingDate',
        },
        {
          label: '승인상태',
          field: 'slipStatus',
        },
      ],
      rows: [],
      searchTerm: '',
      deleteItem: [],
      logMessage: '',
    }
  },
  computed: {
    ...mapState('account/account', ['slipFormList']),

    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = false
      return this.dir
    },
  },
  created() {
    console.log(store)
    store.dispatch('account/account/FETCH_ALL_SLIP')
  },
  methods: {
    advanceSearch(val) {
      this.searchTerm = val
    },

    onRowClick(params) {
      const newSlipNo = params.row.slipNo
      const index = this.deleteItem.findIndex(v => v.slipNo === newSlipNo)

      if (index < 0) {
        this.deleteItem.push({ slipNo: newSlipNo })
      } else {
        this.deleteItem.splice(index, 1)
      }
    },

    async deleteSlip() {
      const response = await store.dispatch('account/account/DELETE_SLIP', this.deleteItem)
      console.log(response)
      this.logMessage = response.data.errorMsg
      Vue.$toast.success(this.logMessage)
      store.dispatch('account/account/FETCH_ALL_SLIP')
    },
  },
}
</script>
<style lang="scss" scoped>

</style>
