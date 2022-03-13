import Vue from 'vue'
import FeatherIcon from '@core/components/feather-icon/FeatherIcon.vue'
import VueGoodTablePlugin from "vue-good-table";
import 'vue-good-table/dist/vue-good-table.css';

Vue.use(VueGoodTablePlugin).component(FeatherIcon.name, FeatherIcon )
