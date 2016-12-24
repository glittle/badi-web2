<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>My first .vue</h2>
    <h2>Show {{ $route.params.whichType }}</h2>
    <input type=range min=1 max=19 v-model="month">
    <div>{{month}}</div>
  </div>
</template>
<script>
  // import bus from '../mixins/busSubUnsub'
  export default {
    // mixins: [bus],
    data() {
      return {
        path: '', //home
        title: 'Home is Here!',
        msg: 'Welcome to Your Vue.js App',
        month: 5
      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    background-color: red;
  }

</style>
