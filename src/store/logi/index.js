import router from '@/router/index'
import production from '@/store/logi/production/state'
import sales from './sales/state'

export default {
  namespaced: true,
  state: {
    connect: false,
  },
  getters: {
  },
  mutations: {
  },
  modules: {
    sales, production
  },
}
