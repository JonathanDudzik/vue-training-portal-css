<template>
  <div class="nav-bar-container">
    <div class="logo-container">
      <img class="logo" src="../assets/logo.png" alt="logo">
    </div>

    <div class="course-name-container">
      <h1>{{ courseName }}</h1>
    </div>

    <div class="icon-text-container">

      <div @click="mediumSelector('Help')" class="icon-column-container">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-help"></use>
        </svg>
        <p>Help</p>
      </div>

      <div @click="mediumSelector('Settings')" class="icon-column-container">
        <svg class="icon">
          <use xlink:href="../assets/sprite.svg#icon-cog"></use>
        </svg>
        <p>Options</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        courseName: this.$store.state.courseName
      }
    },
    methods: {
      mediumSelector(medium) {
          this.$store.state.selectedModal = medium
          this.$store.state.showMediumModal = true
      }
    }
  }
</script>

<style scoped>
.nav-bar-container {

  /* grid item styles */
  grid-row: 1 / 2;
  grid-column: 1 / -1;

  /* flex container styles */
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.logo-container {

  margin-left: 2rem;

}
.course-name-container {

  margin: 0 1rem;

}
.icon-text-container {

  margin-right: 2rem;
  cursor: pointer;
  
  /* flex container styles */
  display: flex;

}
.icon-column-container {

  margin-right: 1rem;

  /* flex container styles */
  display: flex;
  flex-direction: column;
  align-items: center;

}
.logo {

  height: 6rem;

}
.icon {

  height: 3rem;
  width: 3rem;

}
</style>