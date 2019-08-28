<template>
  <nav class="navbar" role="top navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <img src="../assets/logo.png" alt="logo">
      </div>
    </div>
    <div class="navbar-menu is-active">
      <div class="navbar-end">
          <div class="navbar-item">
            <CourseControls/>
          </div>
      </div>
    </div>
  </nav>
</template>

<script>
import CourseControls from "./CourseControls.vue"

export default {
  components: {
    CourseControls
  }
}
</script>

<style scoped lang="scss">

</style>
