// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
//import 'vue-material/dist/vue-material.css'

import router from './router'

import * as badi from './scripts/badiCalc'

setTimeout(function () {
  badi.prepareDateInfos(173)
}, 0)


Vue.use(Vuex)
Vue.use(VueMaterial)

Vue.material.setCurrentTheme('green');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
