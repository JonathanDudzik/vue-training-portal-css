<template>
  <div id="app">
    <!-- navbar is fixed positioned at top -->
    <NavBar/>
    <!-- This div begins the main content area -->
    <div class="my-m-b-72">
      <NavMenu/>
      <router-view/>
    </div>
    <!-- Footer must always me at bottom of template -->
    <NavFooter/>
  </div>
</template>

<script>
// global non-component imports
import TweenMax from 'gsap/src/minified/TweenMax.min.js'
// @ is an alias to /src
import NavBar from '@/components/NavBar'
import NavMenu from '@/components/NavMenu'
import NavFooter from '@/components/NavFooter'
export default {
  components: {
    NavBar,
    NavFooter,
    NavMenu
  }
}
</script>

<style lang="scss">
  /******************************************************************** 
  START rules that will come before Bulma's variables 
  *********************************************************************/
  @charset "utf-8";
  @import url('https://fonts.googleapis.com/css?family=Nunito:400,700');

  // Setting local color scheme
  $white: #fff;
  $black: #000;
  $light-black: hsl(0, 0%, 15%);
  $dark-blue: #092940;
  $light-blue: #397aac;
  $dark-grey: #5f6c7b;
  $light-grey: #ecf0f3;

  // Setting Bulma variables
  $primary: $dark-blue;
  $light: $light-grey;
  $family-primary: "TransportNew", Arial, "Helvetica Neue", Helvetica, sans-serif;

  /******************************************************************** 
  END rules that will come before Bulma's variables 
  *********************************************************************/

  // Import only what you need from Bulma
  @import "../node_modules/bulma/sass/utilities/_all.sass";
  @import "../node_modules/bulma/sass/base/_all.sass";
  @import "../node_modules/bulma/sass/elements/_all.sass";
  @import "../node_modules/bulma/sass/components/_all.sass";
  @import "../node_modules/bulma/sass/layout/_all.sass";
  @import "../node_modules/bulma/sass/grid/_all.sass";

  /******************************************************************** 
  START rules that will come AFTER Bulma's variables 
  *********************************************************************/
  .my-m-b-72 {
    margin-top: 92px;
  }
</style>
