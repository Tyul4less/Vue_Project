import { $themeConfig } from '@themeConfig'
import router from '@/router/index'

export default {
  namespaced: true,
  state: {
    connect: true,
  },
  getters: {
  },
  mutations: {
    login(state) {
      state.connect = true
      console.log('뮤테이션')
      router.push({ name: 'home' })
    },
  },
}
