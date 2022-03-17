import { $themeConfig } from '@themeConfig'
import router from '@/router/index'
import emp from './affair/state'
import mutations from "@/store/hr/affair/mutation";

export default {
  namespaced: true,
  modules: {
    emp
  },
  state: {
    connect: false,
  },
  getters: {
  },

  mutations

/*  mutations: {
    login(state) {
      state.connect = true
      console.log('뮤테이션')
      router.push({ name: 'home' })
    },
  },*/
}
