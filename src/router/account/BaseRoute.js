const ERP = '/account'
const accountRouter = [
  {
    path: `${ERP}/home`,
    name: 'accountHome',
    component: () => import('@/views/account/Home.vue'),
    meta: {
      pageTitle: 'ACC',
      breadcrumb: [
        {
          text: 'ACC Home',
          active: true,
        },
      ],
    },
  },
  {
    path: '/account-page',
    name: 'account-page',
    component: () => import('@/views/SecondPage.vue'),
    meta: {
      pageTitle: 'Second Page',
      breadcrumb: [
        {
          text: 'Second Page',
          active: true,
        },
      ],
    },
  },
]
export default accountRouter
