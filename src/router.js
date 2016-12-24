import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import routeList from './routes'

export default new Router({
  //mode: 'history',
  routes: routeList.raw
})
