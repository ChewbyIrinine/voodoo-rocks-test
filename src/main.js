import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import App from './App.vue';

library.add(faMagnifyingGlass);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
