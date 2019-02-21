import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import axios from "axios";
=======
import axios from 'axios';
>>>>>>> bd83c8400f6dd7d39d28249be857b9b90d5b2d80

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
