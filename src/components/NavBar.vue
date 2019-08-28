<template>
<div>
  <nav class="navbar" role="top navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <img src="../assets/logo.png" alt="logo">
      </div>
      <div class="navbar-item">
        <router-link to="/">Home</router-link>
      </div>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu is-active">
      <div class="navbar-end">
          <div class="navbar-item">
            <router-link to="/about">About</router-link>
          </div>
      </div>
    </div>
  </nav>
  <section class="section side-menu column is-2 is-padding-2-top">
      <nav id="sideMenu" tabindex="0">
          <p class="menu-label">Contents</p>
          <ul class="menu-list" role="menu">
              <li><a href="#" data-selector="instructions" class="is-active" tabindex="-1" role="menuitem">Course Instructions</a></li>
              <li><a href="#" data-selector="video1" tabindex="-1" role="menuitem">Welcome</a></li>
              <li><a href="#" data-selector="video2" tabindex="-1" role="menuitem">Meal Count Tools</a></li>
              <li><a href="#" data-selector="video3" tabindex="-1" role="menuitem">Setting Up</a></li>
              <li><a href="#" data-selector="video4" tabindex="-1" role="menuitem">Attendance</a></li>
              <li><a href="#" data-selector="certificate" tabindex="-1" role="menuitem">Quiz and Certificate</a></li>
          </ul>
          <p class="menu-label is-padding-2-top">Module Resources</p>
          <ul class="menu-list">
              <li><a href="https://www.nutritionnc.com/snp/index.htm/" target="_blank" tabindex="-1">NC CACFP Website</a></li>
              <li><a href="https://www.nutritionnc.com/snp/pdf/cacfp/forms/fy2019/mealDocCalc/MealCountsandMonthlySummaries/AtRiskAfterschoolDailyRosterandMealCountWorksheet.doc" target="_blank" tabindex="-1">At-risk</a></li>
              <li><a href="./media/transcript-print.pdf" target="_blank">Download PowerPoint handout</a></li>
          </ul>
      </nav>
  </section>
</div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">

</style>
