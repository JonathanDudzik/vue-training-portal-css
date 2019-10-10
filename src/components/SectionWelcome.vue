<template>
  <section class="section">
    <div class="container">
      <figure>
        <img src="../assets/Slide0.jpg">
      </figure>
    </div>
  </section>
</template>

<script>
// import RecordService from '@/services/AxiosLrsCalls'
// import statements from '@/services/ExperienceStatements'
import Headphones from 'vue-material-design-icons/Headphones.vue';
import PauseCircleOutline from 'vue-material-design-icons/PauseCircleOutline.vue';

export default {
  components: {
    Headphones,
    PauseCircleOutline
  },  
  mounted() {
    [
      // Initial experience statement functions
      // RecordService.putStatements(statements.experienced).then(response => response)
      // RecordService.getStatements().then(response => response)
    ]

    // changing the current, next, and prev route values in store.js
    this.$store.commit('changeCurrentRoute', this.$router.currentRoute.name)
    this.$store.commit('changeNextRoute', this.$router.options.routes[this.$store.state.courseRoute].children[1].name)
    this.$store.commit('changePrevRoute', false)
  },
}
</script>

<style lang="scss">

</style>