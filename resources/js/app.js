import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import axios from 'axios';
import VueAxios from 'vue-axios';


Vue.use(VueRouter);
Vue.use(VueAxios, axios);

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
//RUTAS
const router = new VueRouter({
    routes,
    mode: 'history'
  })

Vue.router = router
  


//COMPONENTES
Vue.component('menu-component', require('./components/Menu.vue').default);
Vue.component('Home', require('./components/Home.vue').default);
Vue.component('Register', require('./components/Register.vue').default);
Vue.component('Login', require('./components/Login.vue').default);
Vue.component('Dash', require('./components/Dashboard.vue').default);
Vue.component('Error404', require('./components/Error404.vue').default);
Vue.component('Confi', require('./components/Confi.vue').default);

Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
})

require('./bootstrap');
window.Vue = require('vue');


const app = new Vue({
    el: '#app',
    router : router
});
