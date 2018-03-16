<template>
  <div id="app">

    <!-- <InitialPages :style="{backgroundImage: 'url(' +backgroundURL + ')'}"></InitialPages> -->
    <!-- <PropertyHomePage></PropertyHomePage> -->
    <!-- <PropertyAccount></PropertyAccount> -->
    <!-- <ModuleManage></ModuleManage> -->
    <!-- <ServiceManage></ServiceManage> -->
    <!-- <EstateInform></EstateInform> -->
    <!-- <ResidentInfo></ResidentInfo> -->
    <!-- <PayStandard></PayStandard> -->
    <PayState></PayState>
    <!-- <ServiceProblem></ServiceProblem> -->
    <!-- <SolveProblem></SolveProblem> -->
    
    <footer><p>Copyright © 2018 吾家 保留一切权利。</p></footer>
  </div>
</template>

<script>
import ModuleManage from './components/ModuleManage'
import ServiceManage from './components/ServiceManage'
import EstateInform from './components/EstateInform'
import InitialPages from './components/InitialPages'
import PropertyHomePage from './components/PropertyHomePage'
import PropertyAccount from './components/PropertyAccount'
import ResidentInfo from './components/ResidentInfo'
import PayStandard from './components/PayStandard'
import PayState from './components/PayState'
import ServiceProblem from './components/ServiceProblem'
import SolveProblem from './components/SolveProblem'
import NoNavHeader from './components/NoNavHeader'

export default {
  name: 'app',
  components: {
    ModuleManage,
    ServiceManage,
    EstateInform,
    InitialPages,
    PropertyHomePage,
    PropertyAccount,
    ResidentInfo,
    PayStandard,
    PayState,
    ServiceProblem,
    SolveProblem,
    NoNavHeader

  },
  data () {
    return {
      backgroundURL: './src/assets/images/house.jpg'
    }
  }
}
</script>

<style>
#app {
  background-color: #FAFAD2;
  /*min-width: 10rem;*/
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
 /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;
  /*margin-top: 0.6rem;*/
}
footer {
 /* margin-top: 50px;*/
  height:0.4rem;
  bottom:0rem;
  left:0rem;
  background-color: #F4A460;
  width: 100%;
  padding-left: 0.2rem;
  text-align: center;
  padding-top: 0.1rem;
  margin-bottom: -2rem;
}
</style>
