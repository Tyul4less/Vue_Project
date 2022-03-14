export default [
  {
    title: 'accountHome',
    route: 'accountHome',
    icon: 'HomeIcon',
  },
  {
    title: 'account',
    icon: 'FileIcon',
    children: [
      {
        title: '전표관리',
        route: 'slipHome',
        children: [
          {
            title: '전표조회',
            route: { name: 'slimForm' },
            icon: 'FileIcon',
          },
          {
            title: '전표추가',
            route: { name: 'addSlipForm' },
            icon: 'FileIcon',
          },

        ],
      },

    ],
  },
]
