const SalesRoute = [
  {
    path: '/logi/sales/EstimateInfo',
    name: 'EstimateInfo',
    component: () => import('@/views/logistic/sales/Estimate/EstimateInfo.vue'),
  },
  {
    path: '/logi/sales/EstimateRegiste',
    name: 'EstimateRegiste',
    component: () => import('@/views/logistic/sales/Estimate/EstimateRegiste.vue'),
  },
]
export default SalesRoute
