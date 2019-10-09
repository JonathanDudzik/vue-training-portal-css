<template>
  <div id="app">
    <transition
      v-bind:css="false" 
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"

      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled"
    >
      <router-view ref="routerview"></router-view>
    </transition>
  </div>
</template>

<script>
// global non-component specific imports
import TweenMax from 'gsap/all.js'
import BadgerAccordion from '../node_modules/badger-accordion/dist/badger-accordion'

export default {
  data() {
    return {
      tl: null,
    }
  },
  mounted() {
    this.tl = new TimelineMax()
  },
  methods: {
    /**
     * -------------
     * ENTERING
     * -------------
     */

    beforeEnter(el) {
      this.tl.from(el, 2, {opacity: 0});
    },    
    enter: function(el, done) {
      console.log("enter")
      done()
    },
    afterEnter: function(el) {
      console.log('afterEnter')
    },
    enterCancelled: function(el) {
      console.log('enter Cancelled')
    },

    /**
     * 
     * ---------------
     * LEAVING
     * ---------------
     */

    beforeLeave: function(el) {
      console.log("B4 leave")
    },
    leave: function(el, done) {
      console.log('leave')
      done()
    },
    afterLeave: function(el) {
      console.log('after leave')
    },
    leaveCancelled: function(el) {
      console.log('Cancelled')
    },
  }
}

</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
      transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
  }

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
