<template>
<div class="my-nav-bar">
    
    <nav class="level my-nav-bar--top is-mobile has-background-primary is-marginless">
      <div class="level-left">
        <div class="level-item">
          <img src="../assets/logo.png" alt="logo">
        </div>
      </div>
      <div class="level-right is-size-1 has-text-white">
        <div class="level-item">
          <BtnMenuCourse/>
        </div>
      </div>
    </nav>
    
    <nav class="level my-nav-bar--bottom has-text-light is-mobile">
      <div class="level-left">
        <div class="level-item">
            <p class="is-hidden-mobile" style="padding-right: 10px;">{{ this.$store.state.shortCourseName }}</p>
            <p class="is-hidden-mobile">/</p>
            <p class="is-hidden-mobile" style="padding-left: 10px;">{{ this.$store.state.currentRoute }}</p>
        </div>
      </div>
      <div class="level-right is-size-4">
        <div class="level-item">
          <play-pause/>
        </div>
        <div class="level-item">
          <Stop/>
        </div>
        <div class="level-item">
          <Repeat/>
        </div>
        <div class="level-item"> 
          <BtnCourseHelp/>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
  import BtnMenuCourse from "../components/BtnMenuCourse"
  import BtnCourseHelp from "../components/BtnCourseHelp"
  import PlayPause from "../../node_modules/vue-material-design-icons/PlayPause.vue"
  import Stop from "../../node_modules/vue-material-design-icons/Stop.vue"
  import Repeat from "../../node_modules/vue-material-design-icons/Repeat.vue"

  export default {
    components: {
      BtnMenuCourse,
      BtnCourseHelp,
      PlayPause,
      Stop,
      Repeat,
    },
  }
</script>

<style lang="scss" scoped>
  .my-nav-bar{
    position: fixed;
    top: 0%;
    width: 100%;
    box-shadow: 0 2px 3px rgba(black, 0.1), 0 0 0 1px rgba(black, 0.1);
    z-index: 3;

    &--top{
      padding: 10px 30px 10px 30px;
    }

    &--bottom {
      background-image: url("../assets/background-blue-solid-1.png");
      padding: 10px 30px 10px 30px;
    }
  }
</style>