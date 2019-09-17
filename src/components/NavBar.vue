<template>
<div class="my-nav-bar">
    
    <nav class="level my-nav-bar--top is-mobile has-background-primary is-marginless">
      <div class="level-left">
        <div class="level-item">
          <img src="../assets/logo.png" alt="logo">
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <BtnMenuCourse/>
        </div>
      </div>
    </nav>
    
    <nav class="level my-nav-bar--bottom has-text-light is-mobile">
      <div class="level-left">
        <div class="level-item">
          <p class="is-hidden-mobile">{{ this.$store.state.shortCourseName }}</p> 
          <p class="is-hidden-mobile" style="padding:0px 10px 0px 10px;">&#10140;</p> 
          <p>{{ this.$store.state.currentRoute }}</p>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <p>Play</p>
          <p style="padding:0px 10px 0px 10px;">&#10072;</p> 
          <p>Pause</p>
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
    data() {
      return {}
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
      background-image: url("../assets/background-blue-solid.png");
      padding: 10px 30px 10px 30px;
    }
  }
</style>