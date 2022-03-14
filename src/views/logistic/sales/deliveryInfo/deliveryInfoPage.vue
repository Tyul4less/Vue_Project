<template>
  <div>
    <deliveryInfoGrid />
    <deliveryInfoDetailGrid />
  </div>
</template>

<script>
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination, BTooltip,
} from 'bootstrap-vue'
import deliveryInfoGrid from '@/views/logistic/sales/deliveryInfo/deliveryInfoGrid/deliveryInfoGrid'
import deliveryInfoDetailGrid from '@/views/logistic/sales/deliveryInfo/deliveryInfoDetailGrid/deliveryInfoDetailGrid'

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

    deliveryInfoGrid,
    deliveryInfoDetailGrid,
  },
}
</script>

<style lang="scss" scoped>

</style>

<style lang="scss">

</style>
