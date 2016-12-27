<template>
  <div class="container">
    <md-sidenav class="main-sidebar md-left md-fixed" ref="main-sidebar">
      <md-toolbar class="vue-material-logo" md-theme="white">
        <router-link exact to="/">
          <span>Vue Material</span>
        </router-link>
      </md-toolbar>

      
      <div class="main-sidebar-links">
        <md-list class="md-dense">
          <md-list-item v-for="page in pages">
            <router-link to="/">{{page.text}}</router-link>
          </md-list-item>
        </md-list>
      </div>
    </md-sidenav>
    <transition name="md-router" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  import routeList from './routes'

  export default {
    data() {
      return {
        pages: routeList.menuPages
      }
    },
    mounted() {
      // this.$vuetify.init()
    }
  }

</script>
<style>


</style>
