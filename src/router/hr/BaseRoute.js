const ERP = '/hr'
const insaRouter = [
  {
    path: `${ERP}/home`,
    name: 'hrHome',
    component: () => import('@/views/hr/Home.vue'),
    meta: {
      pageTitle: 'HR',
      breadcrumb: [
        {
          text: 'HR Home',
          active: true,
        },
      ],
    },
  },
  {
    path: '/hr-page',
    name: 'insa-page',
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
export default insaRouter
