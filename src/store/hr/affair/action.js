"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
/** * VUE version 2 TYPESCRIPT 를 구현함 ** */
const FetchAxiosEmp = axios_1.default.create({
    baseURL: 'http://localhost:8282',
    headers: {
        'content-type': 'application/json',
    },
});
const actions = {
    GET_ALL_EMP_LIST(state) {
        FetchAxiosEmp.get('/hr/affair/empList')
            .then(response => {
            state.commit('SET_ALL_EMP_LIST', response.data);
        });
    },
};
/* class AFFAIR { // AFFAIR.GET_ALL_EMP_LIST(); 로 불러올 수 있음 (클래스+함수형 으로 해버리면 모듈화가 힘들다)
class AFFAIR { // AFFAIR.GET_ALL_EMP_LIST(); 로 불러올 수 있음
<<<<<<< HEAD
  GET_ALL_EMP_LIST() {
    console.log('액션')
    // import and DispatchHrEmp.getAll();
    return FetchAxiosEmp.get('/hr/affair/empList')
      .then(response => {
        console.log('axios')
        console.log(response.data)
        mutations.SET_ALL_EMP_LIST(state, response.data)
        console.log(state.allEmpList)
      })
  }
}

export default new AFFAIR()
=======
    GET_ALL_EMP_LIST() {
        console.log('액션')
        // import and DispatchHrEmp.getAll();
        return FetchAxiosEmp.get("/hr/affair/empList")
            .then((response) => {
                mutations.SET_ALL_EMP_LIST(state, response.data);
            });
    }
} */
exports.default = actions;
