<template>
  <div id="app">
    <no-nav-header></no-nav-header>
    <resident-header></resident-header>
    <property-header></property-header>
    
  </div>
</template>

<script>
import NoNavHeader from './components/NoNavHeader'
import ResidentHeader from './components/ResidentHeader'
import PropertyHeader from './components/PropertyHeader'

export default {
  name: 'app',
  components: {
    NoNavHeader,
    ResidentHeader,
    PropertyHeader

  }
}
</script>

<style>
#app {
  background-color: #bbb;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0.6rem;
}
</style>
