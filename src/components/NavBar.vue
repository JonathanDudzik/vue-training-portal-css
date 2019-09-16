<template>
  <div class="my-nav-bar">
    <nav class="level my-nav-bar--top is-mobile has-background-primary is-marginless">
      <!-- left side -->
      <div class="level-left">
        <div class="level-item">
          <img src="../assets/logo.png" alt="logo">
        </div>
      </div>
      <!-- right side -->
      <div class="level-right">
        <div class="level-right">
          <BtnMenuCourse/>
        </div>
      </div>
    </nav>
    
    <div class="level my-nav-bar--bottom has-text-light is-mobile">
      <div class="level-left">
        <div>Listen</div>
      </div>
      <div class="level-item">
        <div class="level-item is-hidden-mobile">
          <p>Points: 97 of 150</p>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <input class="input is-small" type="text" placeholder="search">
          <span class="icon is-small is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BtnMenuCourse from "../components/BtnMenuCourse"
  export default {
    components: {
      BtnMenuCourse
    },
    data() {
      return {
        courseName: this.$store.state.shortCourseName,
        sectionName: this.$store.state.shortSectionName
      }
    }
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