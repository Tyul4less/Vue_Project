import axios, {AxiosInstance} from 'axios'
import {mutations} from "./mutation";
import {state} from "./state";
import {resolveRules} from "vee-validate/dist/types/utils/vnode";

/*** VUE version 2 TYPESCRIPT 를 구현함 ***/

const FetchAxiosEmp: AxiosInstance =
    axios.create({
        baseURL: "http://localhost:8081",
        headers : {
            "content-type" : "application/json"
        },
    })

class AFFAIR { // AFFAIR.GET_ALL_EMP_LIST(); 로 불러올 수 있음
    GET_ALL_EMP_LIST() {
        console.log('액션')
        // import and DispatchHrEmp.getAll();
        return FetchAxiosEmp.get("/hr/affair/empList")
            .then((response) => {
                console.log("axios");
                console.log(response.data);
                mutations.SET_ALL_EMP_LIST(state, response.data);
                console.log(state.allEmpList);
            });
    }
}

export default new AFFAIR