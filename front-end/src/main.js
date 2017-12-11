import Vue from 'vue'
import App from './App'
import router from './router'

// Vuex State Management System
import { sync } from 'vuex-router-sync'
import store from '@/store/store'

// CSS Framework & Component Library
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

sync(store, router)

Vue.use(Buefy)

Vue.config.productionTip = false

export default new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
