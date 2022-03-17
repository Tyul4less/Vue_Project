"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutations = void 0;
//import {SET_ALL_EMP_LIST} from './mutation-types'
/*** VUE version 2 TYPESCRIPT 를 구현함 ***/
var MutationTypes;
(function (MutationTypes) {
    MutationTypes["SET_ALL_EMP_LIST"] = "SET_ALL_EMP_LIST";
})(MutationTypes || (MutationTypes = {}));
/////////////////////////위에꺼 안써도됨////////////////////////////////
exports.mutations = {
    SET_ALL_EMP_LIST(state, payload) {
        state.allEmpList = payload;
    }
};
exports.default = exports.mutations;
