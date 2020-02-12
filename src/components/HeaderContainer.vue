<template>
  <div class="nav-bar-container">
    <div class="logo-container">
      <img class="logo" src="../assets/logo.png" alt="logo">
    </div>

    <div class="course-name-container">
      <h1>{{ courseName }}</h1>
    </div>

    <div class="icon-row-container">

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

  /* flex item styles */
  flex-grow: 0; 
  flex-shrink: 0; 
  flex-basis: auto;
  align-self: stretch;
  align-items: center;
  
}
.course-name-container {

  /* flex item styles */
  flex-grow: 0; 
  flex-shrink: 0; 
  flex-basis: 50%;
  align-self: stretch;
  align-items: center;

  /* flex container styles */
  display: flex;
  justify-content: center;

}
.icon-row-container {

  /* flex item styles */
  flex-grow: 0; 
  flex-shrink: 0; 
  flex-basis: auto;
  align-self: stretch;
  align-items: center;

  /* flex container styles */
  display: flex;
  /* flex-direction: column; */
  align-self: stretch;
  align-items: center;

  padding: 0 2rem;
  cursor: pointer;

}
.icon-column-container {

  /* flex item styles */
  flex-grow: 0; 
  flex-shrink: 0; 
  flex-basis: auto;
  align-self: stretch;
  align-items: center;

  /* flex container styles */
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: center;

  margin-right: .5rem;

}
.logo {

  height: 6rem;
  margin-left: 2rem;

}
.icon {

  height: 3rem;
  width: 3rem;
  margin-top: 1rem;

}
</style>