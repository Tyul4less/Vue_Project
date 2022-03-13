<template>
  <div>
    <estimate-infotable1></estimate-infotable1>
    <estimate-info-table2></estimate-info-table2>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-absolute-path,import/no-unresolved
import estimateInfotable1  from '/src/components/logistic/sales/estimate/EstimateInfoTable1.vue';
import estimateInfoTable2 from '@/components/logistic/sales/estimate/EstimateInfoTable2'

export default {
  components: {
    estimateInfotable1,
    estimateInfoTable2,
  },
}
</script>
