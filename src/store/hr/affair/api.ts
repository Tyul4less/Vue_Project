import { GetterTree } from 'vuex'
import { EmpList } from './state'

const getters: GetterTree<EmpList, Object> = {
  getAllEmp(state: EmpList): Object {
    return state.allEmpList
  },
}

export default getters
