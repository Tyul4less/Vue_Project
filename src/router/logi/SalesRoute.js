const ERP = '/logi'
const salesRoute = [
  {
    path: `${ERP}/contractInfo`,
    name: 'contractInfo',
    component: () => import('@/views/logistic/sales/contract/contractInfo/contractInfo'),
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
    component: () => import('@/views/logistic/sales/contract/registContract/contractRegist'),
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
