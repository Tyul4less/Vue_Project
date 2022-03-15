<template >
  <div>
  <contract-info-grid/>
  <contract-detail-info-grid/>
  </div>
</template>

<script>
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination, BTooltip,
} from 'bootstrap-vue'
import contractInfoGrid from "@/views/logistic/sales/contract/contractInfo/contractInfoGrid/contractInfoGrid";
import contractDetailInfoGrid from "@/views/logistic/sales/contract/contractInfo/contractInfoDetailGrid/contractDetailInfoGrid";


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

    contractInfoGrid,
    contractDetailInfoGrid
  },
}
</script>

<style lang="scss" scoped>

</style>

<style lang="scss">

</style>
