<template>
  <div class="navbar-grid-item">
    <!-- Begin logo container -->
    <div class="logo-container">
      <img class="logo" src="../assets/logo.png" alt="logo">
    </div>
    <!-- End logo container -->

    <!-- Begin course name container (from store) -->
    <div class="course-name-container">
      <h1>{{ courseName }}</h1>
    </div>
    <!-- End course name container (from store) -->

    <!-- Begin help icon and text container -->
    <div class="icon-text-container" @click="mediumSelector('Help')">
      <div class="flex-row">
        <div class="flex-column">
          <svg class="icon">
            <use xlink:href="../../public/sprite.svg#icon-help"></use>
          </svg>
          <p>Help</p>
        </div>
      </div>
    </div>
    <!-- End help icon and text container -->

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
        this.$store.state.showModal = true
    }
  }
}
</script>

<style scoped>
.navbar-grid-item {
  background-color: var(--color-primary-light);
  box-shadow: var(--level-2);

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

.logo-container .logo {
  height: 6rem;
}

.course-name-container {
  margin: 0 1rem;
}

.icon-text-container {
  margin-right: 2rem;
  cursor: pointer;
}

.icon-text-container .flex-row {
  display: flex;
}

.icon-text-container .flex-column {
  /* flex container styles */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-text-container .icon {
  height: 3rem;
  width: 3rem;
}
</style>