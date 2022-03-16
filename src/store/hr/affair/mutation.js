"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutations = void 0;
//import {SET_ALL_EMP_LIST} from './mutation-types'
var MutationTypes;
(function (MutationTypes) {
    MutationTypes["SET_ALL_EMP_LIST"] = "SET_ALL_EMP_LIST";
})(MutationTypes || (MutationTypes = {}));
exports.mutations = {
    [MutationTypes.SET_ALL_EMP_LIST](state, payload) {
        state.allEmpList = payload;
    }
};
