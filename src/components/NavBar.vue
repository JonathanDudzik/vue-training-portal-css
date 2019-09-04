<template>
  <nav class="my-nav-bar level is-mobile has-background-primary has-text-white">
    <!-- left side -->
    <div class="level-left">
      <div class="level-item">
        <img src="../assets/logo.png" alt="logo">
      </div>
    </div>
    <!-- centered items? -->
    <div class="level-item">
      <p class="is-size-2 is-hidden-mobile">Enrollment Training</p>
    </div>
    <!-- right side -->
    <div class="level-right">
      <div class="level-right">
        <AudioToggler/>
      </div>
      <div class="level-right">
        <MenuToggler/>
      </div>
    </div>
  </nav>
</template>

<script>
  import MenuToggler from "../components/ControlMenuToggle"
  import AudioToggler from "../components/ControlAudioToggle"
  export default {
    components: {
      MenuToggler,
      AudioToggler
    }
  }
</script>

<style lang="scss" scoped>
  .my-nav-bar {
    position: fixed;
    top: 0%;
    width: 100%;
    box-shadow: 0 2px 3px rgba(black, 0.1), 0 0 0 1px rgba(black, 0.1);
    padding: 10px 30px 10px 30px;
  }
</style>