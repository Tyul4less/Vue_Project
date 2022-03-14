import router from '@/router/index'
import production from '@/store/logi/production/state'

export default {
  namespaced: true,
  modules: {
    production,
  },
  state: {
    connect: false,
  },
  getters: {
  },
  mutations: {
  },
}
