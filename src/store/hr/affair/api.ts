import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import './action';

Vue.use(Vuex);

interface Api {
    hrEmpList : Array<Object>;
}

const store: StoreOptions<Api> = {
    state : {
        hrEmpList : []
    }
}

export default new Vuex.Store(store)