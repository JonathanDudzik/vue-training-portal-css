<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-size-1">Instructions</h1>
      <button class="is-size-5 button" @click=playWelcomeContentOne><headphones/><em style="padding-left: 10px;">Listen from here</em></button>
      <div class="is-divider"></div> <!-- "data-content" can be used to add text --> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
        Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales 
        ligula in libero. Sed dignissim lacinia nunc.</p>
      <div class="is-divider"></div> <!-- "data-content" can be used to add text --> 
      <figure 
        ref="instructions" 
        class="image" 
        @click=playWelcomeContentTwo
      >
        <img src="../assets/welcome.jpg">
      </figure>

      <figure 
        ref="logo" 
        class="image" 
      >
        <img src="../assets/logo.png">
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
    // RecordService.putStatements(statements.experienced).then(response => response)
    // RecordService.getStatements().then(response => response)

    // changing the current, next, and prev route values in store.js
    // these values control the footer navigation among other areas
    this.$store.commit('changeCurrentRoute', this.$router.currentRoute.name)
    this.$store.commit('changeNextRoute', this.$router.options.routes[3].children[1].name)
    this.$store.commit('changePrevRoute', false)
  },
  methods: {
    playWelcomeContentOne() {
      // Taking inspiration from tooltips and webpage guide libraries
      // Auto scroll the page
      // Highlight sections and words, and display tips, dialogues, and images
      // On end, mark the concept as complete (on page), add points, move to and autoplay next guided concept
      // Each guided concept has it's own start button
      // Some guided concepts stop at a video or activity and continue again on finish
      // Escape by scrolling the page manually, clicking an X at the top of the screen, or pressing escape
      
    },

    playWelcomeContentTwo() {
      // var audio = new Audio(require('../assets/welcome.mp3'));
      var cacfpLogo = new Image(require('../assets/logo.png'));
      const { instructions, logo } = this.$refs
      const tween = new TimelineMax()
      tween.fromTo(logo, 0.5, {scale: 0}, { scale: 1, x: 200, y: -550 })
       .to(logo, 0.5, {scale: .4})
       .to(logo, 0.5, {x: 190, y: -560})
        
    }
  }
}
</script>

<style lang="scss">

</style>