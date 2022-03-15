import salesRoute from './SalesRoute'

const ERP = '/logi'
const logiRouter = [
    {
        path: `${ERP}/home`,
        name: 'logiHome',
        component: () => import('@/views/logistic/Home.vue'),
        meta: {
            pageTitle: 'LOGI',
            breadcrumb: [
                {
                    text: 'LOGI Home',
                    active: true,
                },
            ],
        },
    },
    ...salesRoute,
]
export default logiRouter
