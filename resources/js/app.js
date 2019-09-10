
require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

//--------vue x
import Vuex from 'vuex'
Vue.use(Vuex)

import storeData from './vuex/index'
const store = new Vuex.Store(
    storeData
)



// v-form
import { Form, HasError, AlertError } from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// ----------sweet alert
import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  })
window.Toast = Toast;



// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
let routes = [
    { path: '/home', component: require('./components/admin/AdminHome.vue').default },
    { path: '/post', component: require('./components/admin/Post.vue').default },

    //category route
    { path: '/category', component: require('./components/admin/category/Category.vue').default },
    { path: '/category-add', component: require('./components/admin/category/addNew.vue').default },
]
 Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history',

  })


const app = new Vue({
    el: '#app',
    router,
    store,
});
