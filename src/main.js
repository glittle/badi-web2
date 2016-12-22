// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Home from './pages/Home'
import Listing from './pages/Listing'
import Verse from './pages/Verse'
import Setup from './pages/UserSetup'

import * as badi from './scripts/badiCalc'
badi.prepareDateInfos(173)

Vue.use(VueRouter)

const routes = [{
  path: '/listing/:whichType',
  component: Listing
}, {
  path: '/',
  component: Home
}, {
  path: '/verse',
  component: Verse
}, {
  path: '/setup',
  component: Setup
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
