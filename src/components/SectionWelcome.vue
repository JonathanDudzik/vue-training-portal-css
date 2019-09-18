<template>
  <section class="section">
    <div class="container">
      <figure class="image">
        <img src="../assets/welcome.jpg">
      </figure>
      <div class="notification my-captions-box" ref="welcomeCaptionsOne" @click="playWelcomeContentOne">
      </div>
    </div>
  </section>
</template>

<script>
import Headphones from 'vue-material-design-icons/Headphones.vue';
import PauseCircleOutline from 'vue-material-design-icons/PauseCircleOutline.vue';
import Captions from '../services/SectionCaptions'

export default {
  components: {
    Headphones,
    PauseCircleOutline
  },
  mounted() {
    this.$store.commit('changeCurrentRoute', this.$router.currentRoute.name)
    this.$store.commit('changeNextRoute', this.$router.options.routes[2].children[2].name)
    this.$store.commit('changePrevRoute', this.$router.options.routes[2].children[0].name)
  },
  methods: {
    playWelcomeContentOne() {
      var audio = new Audio(require('../assets/welcome.mp3'));
      const { welcomeCaptionsOne } = this.$refs
      const tween = new TimelineMax()
      tween.set(welcomeCaptionsOne, {text: Captions.captions[0]}, '+=1')
        .set(welcomeCaptionsOne, {text: Captions.captions[1]}, '+=1')
        .set(welcomeCaptionsOne, {text: Captions.captions[2]}, '+=1')
        .set(welcomeCaptionsOne, {text: Captions.captions[3]}, '+=1')
        .set(welcomeCaptionsOne, {text: Captions.captions[4]}, '+=1')
        .set(welcomeCaptionsOne, {text: Captions.captions[5]}, '+=1')
        .set(welcomeCaptionsOne, {text: Captions.captions[6]}, '+=1')
        
    }
  }
}
</script>

<style lang="scss">
.my-captions-box {
  position: relative;
  top: 5px;
  width: 100%;
  height: 10rem;
}
</style>