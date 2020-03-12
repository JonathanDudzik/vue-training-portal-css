<template>
  <div id="app">
    <div v-for="(item, index) in $store.state.viewComponentList" v-bind:key="index">
      <transition name="component-fade" mode="out-in">
        <component v-bind:is="item"/>
      </transition>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainMenu from '@/components/MainMenu'
import Help from '@/components/modal-views/Help'
import Settings from '@/components/modal-views/Settings'
import Listen from '@/components/modal-views/Listen'
import Watch from '@/components/modal-views/Watch'
import Read from '@/components/modal-views/Read'
import Interactive from '@/components/modal-views/Interactive'

export default {
  // The below function must iterate through course template mapping array of all media component names to work with
  // components: Object.keys(CourseTemplate[0].media).reduce((accumulator, currentVal) => { return Object.assign(accumulator, { [currentVal]: () => import(`../components/${currentVal}.vue`) }) }, {}),
  // ALSO check out ASYNC Components in the Documentation: https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
  components: {
    "MainHeader": MainHeader,
    "MainMenu": MainMenu,
    "Settings": Settings,
    "Help": Help,
    "Listen": Listen,
    "Watch": Watch,
    "Read": Read,
    "Interactive": Interactive,
  }
}
</script>

<style lang="scss">
  // Imports: pack light 
  @import "./styles/main.css";
  @import url('https://fonts.googleapis.com/css?family=Nunito:400,700');

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
