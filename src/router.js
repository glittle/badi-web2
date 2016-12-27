import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import routeList from './routes'

export default new Router({
  mode: 'hash',
  routes: routeList.raw
})
