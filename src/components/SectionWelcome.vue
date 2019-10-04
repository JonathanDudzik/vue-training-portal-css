<template>
  <section class="section">
    <div class="container">
      <div class="tile is-ancestor is-vertical">
        <div  class="tile box is-12 boxOne">
          <figure ref="welcomeGsapImageOne">
            <img src="../assets/background-blue-solid.png">
          </figure>
        </div>
      </div>
      <button class="is-large" ref="welcomeCaptionsOne" @click="playAnim">Play Animation</button>
      <button class="is-large" ref="welcomeCaptionsOne" @click="pauseAnim">Pause Animation</button>
    </div>
  </section>
</template>

<script>
import Headphones from 'vue-material-design-icons/Headphones.vue';
import PauseCircleOutline from 'vue-material-design-icons/PauseCircleOutline.vue';
/*********************************************************************
* animation imports two objects: the tl object and 
* the function "setTimeline".
*
* When called setTimeline sets the tl object,
* making it ready to play
**********************************************************************/
import animation from '../services/Timelines'
export default {
  components: {
    Headphones,
    PauseCircleOutline
  },
  mounted() {
    this.$store.commit('changeCurrentRoute', this.$router.currentRoute.name)
    this.$store.commit('changeNextRoute', this.$router.options.routes[3].children[2].name)
    this.$store.commit('changePrevRoute', this.$router.options.routes[3].children[0].name)
    animation.setTimeline(this.$refs.welcomeGsapImageOne) // calls the function that set the tl object up
  },
  methods: {
    playAnim() {
      animation.tl.play(0) // this function calls the now ready to play tl object
    },
    pauseAnim() {
      animation.tl.pause()
    }
  }
}
</script>

<style lang="scss">

</style>


// Audio Object 
// const audio = new Audio(require('../assets/welcome.mp3'));


// const captions = ["Welcome to the North Carolina Child and Adult Care Food Program webinar on Child Eligibility Applications.",
// "This is an  introductory training for staff who are responsible for CACFP recordkeeping.",
// "You will learn about child Income Eligibility application requirements, see a sample child Eligibility application form developed by the state agency, and receive tips on maintaining eligibility documentation.",
// "You will also be taken through some scenarios to help complete the state agency sample form successfully.",
// "Please note, we have a separate training for adult Income Eligibility applications which can be found at nutritionnc.com, on the Special Nutrition Programs training page. ",
// "Next, we will discuss how to navigate this webinar."
// ]