<template>
  <div class="my-nav-bar">
      <nav class="level my-nav-bar--top is-mobile has-background-primary is-marginless">
        <div class="level-left">
          <div class="level-item">
            <img src="../assets/logo.png" alt="logo">
          </div>
          <div class="level-item">
            <p class="has-text-white" style="padding-right: 10px;">{{ this.$store.state.courseName }}</p>
          </div>
        </div>
        <div class="level-right is-size-1 has-text-white">
          <div class="level-item">
            <BtnMenuCourse/>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
  import BtnMenuCourse from "../components/BtnMenuCourse"
  export default {
    components: {
      BtnMenuCourse,
    },
  }
</script>

<style lang="scss" scoped>
  .my-nav-bar{
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 2px 3px rgba(black, 0.1), 0 0 0 1px rgba(black, 0.1);
    z-index: 3;

    &--top{
      padding: 5px 30px 5px 30px;
    }
  }
</style>