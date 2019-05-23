import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import Jquery from 'jquery'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(BootstrapVue)

import Dashboard from './components/Dashboard.vue'
import Route from './components/Route.vue'
import Profile from './components/Profile.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkExactActiveClass: 'active',
  routes: [
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/route', name: 'route', component: Route },
    { path: '/profile', name: 'profile', component: Profile },
  ]
})

const store = new Vuex.Store({
  state: {
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
