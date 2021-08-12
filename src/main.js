import Vue from 'vue'
import App from './App.vue'
import router from './router/index'; 
import store from './store/index';
// import axios from "axios";
// import VueAxios from 'vue-axios'
// import AxiosPlugin from 'vue-axios-cors';

// Vue.use(VueAxios, axios)
// Vue.use(AxiosPlugin);

// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.config.productionTip = false;

import "@/assets/scss/_index.scss" ; 

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
