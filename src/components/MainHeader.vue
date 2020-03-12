<template>
  <div class="header-grid-container">
    <!-- Begin logo container -->
    <div class="logo-container">
      <img class="logo" src="../assets/logo.png" alt="logo">
    </div>
    <!-- End logo container -->

    <!-- Begin background image div -->
    <div class="background-image"></div>
    <!-- End background image div -->

    <!-- Begin course title container -->
    <div class="course-title-container">
      <h1 class="title">{{ courseName }}</h1>
    </div>
    <!-- End course title container -->

    <!-- Begin callout container -->
    <div class="callout-container">
      <p class="callout">Scroll Down</p>
    </div>
    <!-- End callout container -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      courseName: this.$store.state.courseName
    }
  }
}
</script>

<style scoped>
.header-grid-container {
  display: grid;
  grid-template-rows: auto 6fr auto auto 4fr;
  grid-template-columns: 1fr min-content;
}

.logo-container {
  grid-row: 1 / 2;
  grid-column: 1 / -1;
}

.logo-container .logo {
  border-radius: 3px;
  height: 4rem;
  width: 4rem;
}

.background-image {
  position: relative;
  box-shadow: var(--level-1 );
  border-radius: 1px;
  z-index: -3;
  height: 45rem;
  background-image: 
    /* linear-gradient(to bottom,rgba(112, 56, 230, 0.66)), */
    url("../assets/logo.png");
  background-size: cover;

  grid-row: 2 / -1;
  grid-column: 1 / 5;
}

.course-title-container {
  padding: 2rem 3rem;
  background-color: grey;
  margin-right: -5px;
  box-shadow: var(--level-1 );

  grid-row: 3 / 4;
  grid-column: 4 / 5;
}

.course-title-container .title {
  color: var(--color-white)
}

.callout-container {
  width: 50%;
  padding: 1rem 2rem;
  background-color: lightblue;
  margin-right: -5px;
  margin-top: -3px;
  box-shadow: var(--level-1 );

  grid-row: 4 / 5;
  grid-column: 4 / 5;
  justify-self: end;
}

.callout-container .callout {
  color: var(--color-white)
}
</style>