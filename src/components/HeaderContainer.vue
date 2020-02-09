<template>
  <div class="nav-bar-container">
    <div class="logo-container">
      <img class="logo" src="../assets/logo.png" alt="logo">
    </div>
    <div class="course-name-container">
      <h1>{{ courseName }}</h1>
    </div>
    <div class="help-button-container">
      <svg class="help-icon">
        <use xlink:href="../assets/sprite.svg#icon-clock"></use>
      </svg>
      <p>Help</p>
      <button @click="mediumSelector('Help')">CLICK ME</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        courseName: this.$store.state.courseName,
        CourseTemplate: this.$CourseTemplate
      }
    },
    methods: {
      mediumSelector(medium) {
          // this.$store.state.selectedSection = this.$CourseTemplate[0]
          this.$store.state.selectedModal = medium
          this.$store.state.showMediumModal = true
      }
    }
  }
</script>

<style scoped>
.nav-bar-container {

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
  align-items: center;
  justify-content: center;

}
.help-button-container {

  /* flex item styles */
  flex-grow: 0; 
  flex-shrink: 0; 
  flex-basis: auto;
  align-self: stretch;
  align-items: center;

  /* flex container styles */
  display: flex;
  align-self: stretch;
  align-items: center;

  padding: 0 2rem;
  cursor: pointer;

}
.logo {

  height: 5rem;
  margin-left: 3rem;

}
.help-icon {

  height: 2rem;
  width: 2rem;
  margin-right: 1rem;

}
</style>