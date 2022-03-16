import {State} from "./state";
import {MutationTree} from "vuex";
//import {SET_ALL_EMP_LIST} from './mutation-types'

enum MutationTypes{
    SET_ALL_EMP_LIST = "SET_ALL_EMP_LIST"
}

export type Mutations<S = State> = {
    [MutationTypes.SET_ALL_EMP_LIST](state: S, payload: []):void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.SET_ALL_EMP_LIST](state, payload: []){
        state.allEmpList = payload
    }

}

export type Mutation = typeof mutations;