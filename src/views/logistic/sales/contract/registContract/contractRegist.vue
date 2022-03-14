<template>
  <div>
    <contractRegistGrid />
    <contractRegistDetailGrid />
  </div>
</template>

<script>
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination, BTooltip,
} from 'bootstrap-vue'
import contractRegistGrid from '@/views/logistic/sales/contract/registContract/contractRegistGrid/contractRegistGrid'
import contractRegistDetailGrid from '@/views/logistic/sales/contract/registContract/contractRegistDetailGrid/contractRegistDetailGrid'

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

    contractRegistGrid,
    contractRegistDetailGrid,
  },
}
</script>

<style lang="scss" scoped>

</style>

<style lang="scss">

</style>
