<template>
  <div>
    <b-form-input
      v-if="condition==='accountCode'"
      v-model="searchAccountCode"
      style="width : 84%; display : inline-flex"
      placeholder="계정코드입력"
    />
    <b-form-input
      v-else
      v-model="searchAccountName"
      style="width : 84%; display : inline-flex"
      placeholder="계정명입력"
    />
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      style=" float: right"
      @click="searchCode"
    >
      검색
    </b-button>
    <b-table
      striped
      hover
      :fields="fields"
      :items="accoundCodeList"
    />
  </div>

</template>

<script>
import { BButton, BTable, BFormInput } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  components: {
    BTable,
    BButton,
    BFormInput,

  },
  directives: {
    Ripple,
  },
  props: ['condition'],
  data() {
    return {
      searchAccountCode: '',
      searchAccountName: '',
      fields: ['accountInnerCode', 'accountName'],
    }
  },
  computed: {
    ...mapState('account/base', ['accoundCodeList']),

  },
  // 모달창이 없어질떄 호출
  beforeDestroy() {
    this.CLEAR_CODE_LIST()
  },
  created() {
    console.log(this.condition)
  },
  methods: {
    ...mapMutations('account/base', ['CLEAR_CODE_LIST']),
    ...mapActions('account/base', ['FETCH_ACCOUNT_CODE']),

    async searchCode() {
      if (this.condition === 'accountCode') {
        const searchCode = {
          accountCode: this.searchAccountCode,
          accountName: 'undefined',
        }
        const { accoundCodeList } = await this.FETCH_ACCOUNT_CODE(searchCode)
        const { accountCode } = accoundCodeList[0]
        this.$emit('input', accountCode)
      } else {
        console.log(this.searchAccountName)
        const searchCode = {
          accountCode: 'undefined',
          accountName: this.searchAccountName,
        }
        const { accoundCodeList } = await this.FETCH_ACCOUNT_CODE(searchCode)
        const { accountName } = accoundCodeList[0]
        this.$emit('input', accountName)
      }
    },

  },

}
</script>

<style scoped>

</style>
