<template>
  <div id="app">
    <!-- <no-nav-header></no-nav-header> -->
    <!-- <resident-header></resident-header>
    <property-header></property-header> -->

    <InitialPages></InitialPages>
    <!-- <PropertyHomePage></PropertyHomePage> -->
    <!-- <PropertyAccount></PropertyAccount> -->
    <!-- <ModuleManage></ModuleManage> -->
    <!-- <ServiceManage></ServiceManage> -->
    <!-- <EstateInform></EstateInform> -->
    <!-- <ResidentInfo></ResidentInfo> -->
    <!-- <PayStandard></PayStandard> -->
    <!-- <PayState></PayState> -->
    <!-- <ServiceProblem></ServiceProblem> -->
    <!-- <SolveProblem></SolveProblem> -->
    
    <footer><p>Copyright © 2017 吾家 保留一切权利。</p></footer>
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

  }
}
</script>

<style>
/*#app {
  background-color: #bbb;
  min-width: 10rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  /*margin-top: 0.6rem;*/
  
footer {
  margin-top: 50px;
  height:40px;
  bottom:0;
  left:0px;
  background-color: #ee9147;
  width: 100%;
  padding-left: 20px;
  text-align: center;
  padding-top: 1px;
}
</style>
