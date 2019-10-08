<template>
  <section class="section">
    <div class="container">
      <figure>
        <img ref="slide1" class="imageOne" src="../assets/background-blue-solid-1.png">
      </figure>
      <figure>
        <img ref="slide2" class="imageTwo" src="../assets/background-blue-solid-2.png">
      </figure>
      <figure>
        <img ref="slide3" class="imageThree" src="../assets/background-blue-solid-3.png">
      </figure>
      <figure>
        <img ref="slide4" class="imageFour" src="../assets/background-blue-solid-4.png">
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slideMaster: null,
      audioObject: null,
    }
  },
  mounted() {
    // update $store state to the current location of the course
    this.$store.commit('changeCurrentRoute', this.$router.currentRoute.name)
    this.$store.commit('changeNextRoute', this.$router.options.routes[3].children[2].name)
    this.$store.commit('changePrevRoute', this.$router.options.routes[3].children[0].name)

    // update $data with the audio object
    this.audioOne = new Audio(require('../assets/welcome.mp3')) // Audio object through $data will be reactive
  
    // it is recommended using functions to create each section of your complex timelines
    const createSlide = function(slide, delay) {
      var tl = new TimelineMax();
      tl.add( TweenMax.to(slide, 1, {opacity: 1 }));
      tl.add( TweenMax.to(slide, 1, {opacity: 0, delay: delay }));
      return tl; // it is important to return the tween
    }

    // build a sequence out of all the timelines by placing each one in a parent timeline
    this.slideMaster = new TimelineMax({paused: true});
    this.slideMaster.add(createSlide(this.$refs.slide1, 0))
    this.slideMaster.add(createSlide(this.$refs.slide2, 0.5))
    this.slideMaster.add(createSlide(this.$refs.slide3, 0.2))
    this.slideMaster.add(createSlide(this.$refs.slide4, 0.5))
    this.slideMaster.addCallback(this.toNextRoute, '+=3')
  },
  computed: {
    playAll() {
      return this.$store.state.isPlaying
    },
    resetReplayAll() {
      return this.$store.state.genericEventCounter
    }
  },
  watch: {
    playAll() {
      if(this.$store.state.isPlaying == true) {
        this.slideMaster.play()
        this.audioOne.play()
      } else {
        this.slideMaster.pause()
        this.audioOne.pause()
      }
    },
    resetReplayAll() {
      this.$store.commit('changeIsPlaying', this.$store.state.isPlaying = true)
      this.audioOne.pause()
      this.audioOne.currentTime = 0
      this.audioOne.play()
      this.slideMaster.play(0)
    }
  },
  methods: {
    toNextRoute() {
      this.$router.push({ name: this.$store.state.nextRoute, append: true })
      TweenMax.to(window, .5, {scrollTo: 0});
    },
  },
  beforeDestroy() {
    this.audioOne.pause() // always pause and reset audio on page change
    this.slideMaster.pause(0) // always pause and reset GSAP on page change
    this.$store.commit('changeIsPlaying', this.$store.state.isPlaying = false) // make sure isPlaying state is changed
  },
}
</script>

<style lang="scss">
  .container {
    position: relative;
    width: 60vw;
    height: 60vh;
  }
  .textOne {
    position: absolute;
    top: 0%;
    left: 0%; 
  }
  .textTwo {
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .textThree {
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .textFour {
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .imageOne {
    opacity: 0;
    position: absolute;
    top: 10%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 55%;
  }
  .imageTwo {
    opacity: 0;
    position: absolute;
    top: 10%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 55%;
  }
  .imageThree {
    opacity: 0;
    position: absolute;
    top: 10%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 55%;
  }
  .imageFour {
    opacity: 0;
    position: absolute;
    top: 10%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 55%;
  }

</style>