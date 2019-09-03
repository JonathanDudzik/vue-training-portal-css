<template>
  <div id="app">
    <NavMenu/>
      <NavBar/>
      <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar'
import NavMenu from '@/components/NavMenu'

export default {
  components: {
    NavBar,
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
$primary: $light-blue;
$dark-grey: #5f6c7b;
$light-grey: #ecf0f3;

// Bulma typography variables
$dark: $dark-blue;

// Bulma menu variables
$menu-label-color: $light-black;
$menu-item-color: $light-black;
$menu-item-active-background-color: $dark-grey;
$menu-item-hover-color: $white;
$menu-item-hover-background-color: $light-blue;

// Bulma navbar variables
$navbar-height: 5rem;
$navbar-item-img-max-height: 5rem;
$navbar-background-color: $dark-blue;
$navbar-item-hover-background-color: $dark-grey;
/******************************************************************** 
END rules that will come before Bulma's variables 
*********************************************************************/

// Import only what you need from Bulma
@import "../node_modules/bulma/sass/utilities/_all.sass";
@import "../node_modules/bulma/sass/base/_all.sass";

@import "../node_modules/bulma/sass/elements/box.sass";
@import "../node_modules/bulma/sass/elements/button.sass";
@import "../node_modules/bulma/sass/elements/container.sass";
@import "../node_modules/bulma/sass/elements/content.sass";
@import "../node_modules/bulma/sass/elements/icon.sass";
@import "../node_modules/bulma/sass/elements/notification.sass";
@import "../node_modules/bulma/sass/elements/title.sass";
@import "../node_modules/bulma/sass/elements/other.sass";

@import "../node_modules/bulma/sass/components/list.sass";
@import "../node_modules/bulma/sass/components/menu.sass";
@import "../node_modules/bulma/sass/components/modal.sass";
@import "../node_modules/bulma/sass/components/navbar.sass";

@import "../node_modules/bulma/sass/layout/hero.sass";
@import "../node_modules/bulma/sass/layout/section.sass";
@import "../node_modules/bulma/sass/grid/columns.sass";
@import "../node_modules/bulma/sass/form/_all.sass";
@import "../node_modules/bulma/sass/elements/progress.sass";
node_modules\bulma\sass\elements\progress.sass

/******************************************************************** 
START rules that will come AFTER Bulma's variables 
*********************************************************************/

// My utility classes
.my-min-height-full {
  min-height: 90vh;
}

.my-max-height-half {
  max-height: 70vh;
}

.my-background-image {
  background-image: url("../src/assets/background-blue-solid.png");
}

.my-modal-close:focus {
  outline: 2px solid $light-blue;
}

// Modifying Bulma's classes
.notification {
    background-color: $light-blue;
}
</style>
