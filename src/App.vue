<template>
  <div id="app">
    <h1>vue-sweet-calendar</h1>
    <Calendar msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue'

export default {
  name: 'app',
  components: {
    Calendar
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
