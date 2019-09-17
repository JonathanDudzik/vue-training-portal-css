<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
// global non-component specific imports
import TweenMax from 'gsap/all.js'
import BadgerAccordion from '../node_modules/badger-accordion/dist/badger-accordion'

export default {}
</script>

<style lang="scss">
  /******************************************************************** 
  Rules that will come before Bulma's variables 
  *********************************************************************/
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
  $menu-item-hover-background-color: hsl(0, 0%, 71%);
  $family-primary: "TransportNew", Arial, "Helvetica Neue", Helvetica, sans-serif;

  /******************************************************************** 
  Imports: pack light 
  *********************************************************************/
  @import "../node_modules/bulma/sass/utilities/_all.sass";
  @import "../node_modules/bulma/sass/base/_all.sass";
  @import "../node_modules/bulma/sass/elements/_all.sass";
  @import "../node_modules/bulma/sass/components/_all.sass";
  @import "../node_modules/bulma/sass/layout/_all.sass";
  @import "../node_modules/bulma/sass/grid/_all.sass";
  @import "../node_modules/bulma-divider/dist/css/bulma-divider.sass";

  @import "../node_modules/badger-accordion/dist/badger-accordion.scss";
  @import "../node_modules/vue-material-design-icons/styles.css";
  @import url('https://fonts.googleapis.com/css?family=Nunito:400,700');
</style>
