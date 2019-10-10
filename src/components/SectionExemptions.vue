<template>
  <section class="section">
    <div class="container">
      
      <h1 class="title is-size-1">
        Exemptions
      </h1>
      <h2 class="is-size-4"><headphones/><em style="padding-left: 10px;">Listen from here</em></h2>
      <h2 class="is-size-4"><pause-circle-outline/><em style="padding-left: 10px;">Pause Audio</em></h2>
      <div class="is-divider"></div> <!-- "data-content" can be used to add text -->
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
        Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales 
        ligula in libero. Sed dignissim lacinia nunc.</p>

      <h1 class="is-size-1">
        Heading
      </h1>
      <h2 class="is-size-6"><em>&#9738; Listen from here</em></h2>
      <div class="is-divider"></div> <!-- "data-content" can be used to add text -->
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
        Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales 
        ligula in libero. Sed dignissim lacinia nunc.</p>

    </div>
  </section>
</template>

<script>
import Headphones from 'vue-material-design-icons/Headphones.vue';
import PauseCircleOutline from 'vue-material-design-icons/PauseCircleOutline.vue';

export default {
  components: {
    Headphones,
    PauseCircleOutline
  },
  mounted() {
    this.$store.commit('changeCurrentRoute', this.$router.currentRoute.name)
    this.$store.commit('changeNextRoute', false)
    this.$store.commit('changePrevRoute', this.$router.options.routes[this.$store.state.courseRoute].children[2].name)
  },
}
</script>

<style lang="scss">

</style>