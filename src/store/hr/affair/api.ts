import {EmpList} from './state'
import {GetterTree} from "vuex";

const getters: GetterTree<EmpList, Object> = {
    getAllEmp(state: EmpList): Object{
        return state.allEmpList;
    }
};

export default getters