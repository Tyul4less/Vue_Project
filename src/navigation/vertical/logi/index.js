import dashboard from '@/navigation/vertical/common/dashboard'
import salesMenu from '@/navigation/vertical/logi/salesMenu'

export default [
  ...dashboard,
  {
    title: '메인페이지',
    route: 'logiHome',
    icon: 'BoxIcon',
  },
  ...salesMenu,
]
