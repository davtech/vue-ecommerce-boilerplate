import Vue from 'vue'
import AppLayout from './layouts/Index'
import router from './router'
import store from './store'

import api from '@/services/api'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Global persons config
import './assets/scss/main.scss'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(AppLayout)
}).$mount('#app')
