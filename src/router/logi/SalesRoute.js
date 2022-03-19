const ERP = '/logi'
const salesRoute = [
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
  {
    path: `${ERP}/contractInfo`,
    name: 'contractInfo',
    component: () => import('@/views/logistic/sales/contract/contractInfo'),
    meta: {
      pageTitle: '수주 조회',
      breadcrumb: [
        {
          text: '영업 관리',
        },
        {
          text: '수주 관리',
        },
        {
          text: '수주 조회',
          active: true,
        },
      ],
    },
  },
  {
    path: `${ERP}/registContract`,
    name: 'registContract',
    component: () => import('@/views/logistic/sales/contract/contractRegist'),
    meta: {
      pageTitle: '수주 등록',
      breadcrumb: [
        {
          text: '영업 관리',
        },
        {
          text: '수주 관리',
        },
        {
          text: '수주 등록',
          active: true,
        },
      ],
    },
  },
  {
    path: `${ERP}/deliveryInfoPage`,
    name: 'deliveryInfoPage',
    component: () => import('@/views/logistic/sales/deliveryInfo/deliveryInfoPage'),
    meta: {
      pageTitle: '수주 등록',
      breadcrumb: [
        {
          text: '영업 관리',
        },
        {
          text: '납품 관리',
          active: true,
        },
      ],
    },
  },
]

export default salesRoute
