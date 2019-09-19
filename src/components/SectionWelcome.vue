<template>
  <section class="section">
    <div class="container">
      <div class="tile is-ancestor is-vertical">
        <div  class="tile box is-12 boxOne">
          <figure class="image bg">
            <img src="../assets/background-blue-solid.png">
          </figure>
          <div class="text">
            <span>DHHS</span>
            <span>NC CACFP</span>
            <br>
            <span>Training</span>
            <span>And</span>
            <span>Policy</span>
            <span>Team</span>
          </div>
        </div>
        <div class="tile box is-12 boxTwo">
          <figure class="image bg">
            <img src="../assets/background-blue-solid.png">
          </figure>
          <div class="text">
            <span>DHHS</span>
            <span>NC CACFP</span>
            <br>
            <span>Training</span>
            <span>And</span>
            <span>Policy</span>
            <span>Team</span>
          </div>
        </div>
        <div class="tile box is-12 boxThree">
          <figure class="image bg">
            <img src="../assets/background-blue-solid.png">
          </figure>
          <div class="text">
            <span>DHHS</span>
            <span>NC CACFP</span>
            <br>
            <span>Training</span>
            <span>And</span>
            <span>Policy</span>
            <span>Team</span>
          </div>
        </div>
      </div>
      <button class="is-large" ref="welcomeCaptionsOne">Play Animation</button>
    </div>
  </section>
</template>

<script>
import Headphones from 'vue-material-design-icons/Headphones.vue';
import PauseCircleOutline from 'vue-material-design-icons/PauseCircleOutline.vue';
import Captions from '../services/SectionCaptions'
import tl from '../services/Timelines.js'

const audio = new Audio(require('../assets/welcome.mp3'));

export default {
  components: {
    Headphones,
    PauseCircleOutline
  },
  mounted() {
    this.$store.commit('changeCurrentRoute', this.$router.currentRoute.name)
    this.$store.commit('changeNextRoute', this.$router.options.routes[2].children[2].name)
    this.$store.commit('changePrevRoute', this.$router.options.routes[2].children[0].name)
    tl.playTimeline('.boxOne')
  },
}
</script>

<style lang="scss">

</style>