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
      // there must be an easier way to do this...
      this.slideMaster.kill()
      this.pauseStoreAudio()
      this.$store.state.currentMedia.currentTime = 0
      this.setStoreAudio(this.audioOne)
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
    setStoreAudio(src) {
      // TRY TO PLAY FROM YOUR LOCAL DATA INSTEAD OF USING THE STORE..?
      // this.$store.commit('changeCurrentMedia', src) 
    },
    getStoreAudioTime() {
        console.log('this audio is ' + this.$store.state.currentMedia.duration + ' long')
    },
    playStoreAudio(src) {
      src.play
    //  this.$store.state.currentMedia.play()
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
    this.slideMaster.call(this.getStoreAudioTime, this, "slide1") // calls must come before the label they are called on
    this.slideMaster.add(createSlide(this.$refs.slide1, 3), 'slide1')
    this.slideMaster.call(this.pauseStoreAudio, this, "slide2")
    this.slideMaster.call(this.setStoreAudio, [ this.audioTwo ], this, "slide2")
    this.slideMaster.call(this.playStoreAudio, this, "slide2")
    this.slideMaster.add(createSlide(this.$refs.slide2, 3), 'slide2')
    this.slideMaster.add(createSlide(this.$refs.slide3, 3), 'slide3')
    this.slideMaster.add(createSlide(this.$refs.slide4, 5), 'slide4')
    this.slideMaster.addCallback(this.toNextRoute, '+=3')

    // set initially set to control before gsap plays
    this.setStoreAudio(this.audioOne)
    this.$store.state.currentMedia.oncanplaythrough = (event) => {
      console.log('Video can start');
      this.slideMaster.play()
      this.playStoreAudio()
    };
  },
  beforeDestroy() {
    this.slideMaster.kill()
    this.pauseStoreAudio()
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