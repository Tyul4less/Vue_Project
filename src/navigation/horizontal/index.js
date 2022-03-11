export default [
  {
    title: 'Home',
    route: 'home',
    icon: 'HomeIcon',
  },
  {
    title: 'Second Page',
    route: 'second-page',
    icon: 'FileIcon',
  },
  {
    title: '회계',
    icon: 'FileIcon',
    children: [
      {
        title: '회계',
        route: { name: 'slimForm' },
        icon: 'FileIcon',
      },
      {
        title: '물류',
        route: 'slimFormㄴ',
        icon: 'FileIcon',
      },
      {
        title: '인사',
        route: 'slimFormㅁ',
        icon: 'FileIcon',
      },
    ],
  },

]
