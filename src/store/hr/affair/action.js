"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const mutation_1 = require("./mutation");
const state_1 = require("./state");
/*** VUE version 2 TYPESCRIPT 를 구현함 ***/
const FetchAxiosEmp = axios_1.default.create({
    baseURL: "http://localhost:8081",
    headers: {
        "content-type": "application/json"
    },
});
class AFFAIR {
    GET_ALL_EMP_LIST() {
        console.log('액션');
        // import and DispatchHrEmp.getAll();
        return FetchAxiosEmp.get("/hr/affair/empList")
            .then((response) => {
            console.log("axios");
            console.log(response.data);
            mutation_1.mutations.SET_ALL_EMP_LIST(state_1.state, response.data);
            console.log(state_1.state.allEmpList);
        });
    }
}
exports.default = new AFFAIR;
