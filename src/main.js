// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Listing from './pages/Listing'
import Hello from './pages/Hello'
import Verse from './pages/Verse'

import badiCalc from './scripts/badiCalc'
import sunCalc from './scripts/sunCalc'

Vue.use(VueRouter)

const routes = [{
  path: '/listing/:whichType',
  component: Listing
}, {
  path: '/',
  component: Hello
}, {
  path: '/verse',
  component: Verse
}]

const router = new VueRouter({
  routes,
  //mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
