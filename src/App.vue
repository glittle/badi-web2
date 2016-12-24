<template>
  <v-app top-navbar>
    <header>
      <v-navbar class="green">
        <v-navbar-logo>Navbar</v-navbar-logo>
        <v-navbar-items :items="items"></v-navbar-items>
      </v-navbar>
    </header>
    <main>
      <v-sidebar id="x" height="50vh" v-bind:items="items"></v-sidebar>
      <v-sidebar id="y" drawer>
        <v-sidebar-items v-bind:items="items"></v-sidebar>
      </v-sidebar>
      <v-content>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>
<script>
  import routeList from './routes'

  export default {
    data() {
      return {
        items: routeList.menu
      }
    },
    mounted() {
      this.$vuetify.init()
    }
  }

</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

</style>
