import hr from './hr'
import account from './account'
import logi from './logi'

export default [
  ...hr,
  ...account,
  ...logi,
]
/*
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
    title: 'account',
    icon: 'FileIcon',
    children: [
      {
        title: '전표',
        route: { name: 'slimForm' },
        icon: 'FileIcon',
      },
      {
        title: '분개',
        route: 'slimFormㄴ',
        icon: 'FileIcon',
      },
      {
        title: 'statement',
        route: 'slimFormㅁ',
        icon: 'FileIcon',
      },
    ],
  },
  {
    title: 'base',
    route: 'slimFormㄴ',
    icon: 'FileIcon',
  },
  {
    title: 'statement',
    route: 'slimFormㅁ',
    icon: 'FileIcon',
  },
],
},
{
  title: '물류',
      icon: 'FileIcon',
    children: [
  {
    title: 'account',
    route: { name: 'slimForm1' },
    icon: 'FileIcon',
  },
  {
    title: 'base',
    route: 'slimFormㄴ',
    icon: 'FileIcon',
  },
  {
    title: 'statement',
    route: 'slimFormㅁ',
    icon: 'FileIcon',
  },
],
},

{
  title: '인사',
      icon: 'FileIcon',
    children: [
  {
    title: 'account',
    route: { name: 'slimForm2' },
    icon: 'FileIcon',
  },
  {
    title: 'base',
    route: 'slimFormㄴ',
    icon: 'FileIcon',
  },
  {
    title: 'statement',
    route: 'slimFormㅁ',
    icon: 'FileIcon',
  },
],
},
*/
