<template>
  <div class="my-nav-bar">
      <nav class="level my-nav-bar--bottom has-text-light is-mobile">
        <div class="level-left">
          <BtnSectionPrev/>
          <p class="is-hidden-mobile">|</p>
          <p class="is-hidden-mobile">{{ this.$store.state.currentRoute }}</p>
          <p class="is-hidden-mobile">|</p>
          <BtnSectionNext/>
        </div>
        <div class="level-right is-size-4">
          <!-- <div class="level-item"> tag included in Btn components-->
          <BtnPlayPause/>
          <BtnResetReplay/>
          <BtnCourseHelp/>
        </div>
      </nav>
  </div>
</template>

<script>
  import BtnCourseHelp from "../components/BtnCourseHelp"
  import BtnPlayPause from "../components/BtnPlayPause"
  import BtnResetReplay from "../components/BtnResetReplay"
  import BtnSectionPrev from "../components/BtnSectionPrev"
  import BtnSectionNext from "../components/BtnSectionNext"
  export default {
    components: {
      BtnCourseHelp,
      BtnPlayPause,
      BtnResetReplay,
      BtnSectionPrev,
      BtnSectionNext,
    },
  }
</script>

<style lang="scss" scoped>
  .my-nav-bar{
    position: fixed;
    top: 82px;
    width: 100%;
    box-shadow: 0 2px 3px rgba(black, 0.1), 0 0 0 1px rgba(black, 0.1);
    z-index: 3;

    &--bottom {
      background-image: url("../assets/background-blue-solid-1.png");
      padding: 10px 30px 10px 30px;
    }
  }
</style>