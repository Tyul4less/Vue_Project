const AccountRoute = [

  {
    path: '/acc/account/slimForm',
    name: 'slimForm',
    component: () => import('@/views/account/account/SlipFormPage.vue'),
  },
  {
    path: '/acc/account/addSlipForm',
    name: 'addSlipForm',
    component: () => import('@/views/account/account/SlipAddFormPage.vue'),
  },

]

export default AccountRoute
