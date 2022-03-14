import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import './action';

Vue.use(Vuex);

interface State {
    hrEmpList : Array<Object>;
}

const store: StoreOptions<State> = {
    state : {
        hrEmpList : []
    }
}

export default new Vuex.Store(store)