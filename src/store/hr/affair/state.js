"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpList = void 0;
const api_1 = __importDefault(require("@/store/hr/affair/api"));
const mutation_1 = __importDefault(require("@/store/hr/affair/mutation"));
const action_1 = __importDefault(require("@/store/hr/affair/action"));
/*** VUE version 2 TYPESCRIPT 를 구현함 ***/
class EmpList {
    constructor() {
        this.allEmpList = [];
    }
}
exports.EmpList = EmpList;
const Emp = {
    namespaced: true,
    state: new EmpList(),
    getters: api_1.default,
    mutations: mutation_1.default,
    actions: action_1.default
};
/*export default{
    namespaced : true,
    state : new EmpList(),
    getters : getters,
    mutations : mutations,
    actions : actions
}*/
/*
export const state = {
    allEmpList : [],
}
*/
//export type State = typeof Emplist
exports.default = Emp;
