<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  /******************************************************************** 
    global non-component imports 
  *********************************************************************/
  import Greensock from 'gsap/all.js'
  import CourseTemplate from './test/CourseTemplate.js'

  /******************************************************************** 
  Vue instance exports
  *********************************************************************/
  export default {}
</script>

<style lang="scss">
  /******************************************************************** 
  Imports: pack light 
  *********************************************************************/
  @import "./styles/main.css";
  @import "../node_modules/badger-accordion/dist/badger-accordion.scss";
  @import "../node_modules/vue-material-design-icons/styles.css";
  @import url('https://fonts.googleapis.com/css?family=Nunito:400,700');
</style>
