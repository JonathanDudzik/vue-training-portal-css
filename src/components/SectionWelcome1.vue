<template>
  <section class="section">
    <div>
      <figure>
        <img ref="slide1" class="imageOne" src="../assets/Slide0.jpg">
      </figure>
      <figure>
        <img ref="slide2" class="imageTwo" src="../assets/Slide1.jpg">
      </figure>
      <figure>
        <img ref="slide3" class="imageThree" src="../assets/Slide2.jpg">
      </figure>
      <figure>
        <img ref="slide4" class="imageFour" src="../assets/Slide3.jpg">
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slideMaster: null,
      audioOne: null,
      audioTwo: null,
      audioThree: null,
      audioFour: null,
    }
  },
  computed: {
    resetReplayAll() {
      return this.$store.state.genericEventCounter
    },
    playAll() {
      return this.$store.state.isPlaying
    },
  },
  watch: {
    resetReplayAll() {
      this.slideMaster.pause(0)
      this.slideMaster.kill()
      this.pauseStoreAudio()
      this.$store.state.currentMedia.currentTime = 0
      this.defineStoreAudio(this.audioOne)
      this.$store.state.currentMedia.currentTime = 0
      this.slideMaster.play(0)
      this.playStoreAudio()
      this.$store.commit('changeIsPlaying', this.$store.state.isPlaying = true)
    },
    playAll() {
      if(this.$store.state.isPlaying == true) {
        this.slideMaster.play()
        this.playStoreAudio()
      } else {
        this.slideMaster.pause()
        this.pauseStoreAudio()
      }
    }
  },
  methods: {
    defineStoreAudio(src) {
     this.$store.commit('changeCurrentMedia', src)
      if(this.$store.state.currentMedia.duration) { // Keeps this value from log of "NaN"
        console.log('this audio is ' + this.$store.state.currentMedia.duration + ' long')
      }
    },
    playStoreAudio() {
     this.$store.state.currentMedia.play()
    },
    pauseStoreAudio() {
     this.$store.state.currentMedia.pause()
    },
    toNextRoute() {
      this.$router.push({ name: this.$store.state.nextRoute, append: true })
      TweenMax.to(window, .5, {scrollTo: 0});
    },
  },
  mounted() {
    this.$store.commit('changeCurrentRoute', this.$router.currentRoute.name)
    this.$store.commit('changeNextRoute', this.$router.options.routes[this.$store.state.courseRoute].children[2].name)
    this.$store.commit('changePrevRoute', this.$router.options.routes[this.$store.state.courseRoute].children[0].name)

    // update $data with the audio objects audio object through $data will be reactive and scoped correctly
    this.audioOne = new Audio(require('../assets/0.mp3'))
    this.audioTwo = new Audio(require('../assets/1.mp3'))
    this.audioThree = new Audio(require('../assets/2.mp3'))
    this.audioFour = new Audio(require('../assets/3.mp3'))
    
    // it is recommended using functions to create each section of your complex timelines
    const createSlide = function(slide, delay) {
      var tl = new TimelineMax();
      tl.add( TweenMax.to(slide, 1, {opacity: 1}));
      tl.add( TweenMax.to(slide, 1, {opacity: 0, delay: delay }));
      return tl; // it is important to return the tween
    }

    // build a sequence out of all the timelines by placing each one in a parent timeline
    this.slideMaster = new TimelineMax({paused: true});
    this.slideMaster.call(this.defineStoreAudio, [ this.audioOne ])
    this.slideMaster.call(this.playStoreAudio)
    this.slideMaster.add(createSlide(this.$refs.slide1, 10.30))
    this.slideMaster.call(this.defineStoreAudio, [ this.audioTwo ])
    this.slideMaster.call(this.playStoreAudio)
    this.slideMaster.add(createSlide(this.$refs.slide2, 22))
    this.slideMaster.add(createSlide(this.$refs.slide3, 0.2))
    this.slideMaster.add(createSlide(this.$refs.slide4, 0.5))
    this.slideMaster.addCallback(this.toNextRoute, '+=3')
  },
  beforeDestroy() {
    this.$store.commit('changeIsPlaying', this.$store.state.isPlaying = false) // make sure isPlaying state is changed
  },
}
</script>

<style lang="scss">
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