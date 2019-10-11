<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
         <figure>
            <img ref="slide1" class="" src="../assets/Slide0.jpg">
          </figure>
          <figure>
            <img ref="slide2" class="hidden" src="../assets/Slide1.jpg">
          </figure>
          <figure>
            <img ref="slide3" class="hidden" src="../assets/Slide2.jpg">
          </figure>
          <figure>
            <img ref="slide4" class="hidden" src="../assets/Slide3.jpg">
          </figure>
        </div>
      </div>
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
      currentAudio: null,
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
      // 1. stop the gsap slide timeline
      this.slideMaster.kill()
      // 2. pause the current audio track
      this.pauseCurrentAudio()
      // 3. reset that track to beginning
      this.currentAudio.currentTime = 0
      // 4. set the currentAudio to the first track
      this.setCurrentAudio(this.audioOne)
      // 5. reset that track to beginning
      this.currentAudio.currentTime = 0
      // 6. start the gsap timeline from beginning
      this.slideMaster.play(0)
      // 7. start playing audio track
      this.playCurrentAudio()
      // 8. make sure pause button is shown
      this.$store.commit('changeIsPlaying', this.$store.state.isPlaying = true)
      // there must be an easier way to do this...
    },
    playAll() {
      if(this.$store.state.isPlaying == true) {
        this.slideMaster.play()
        this.playCurrentAudio()
      } else {
        this.slideMaster.pause()
        this.pauseCurrentAudio()
      }
    }
  },
  methods: {
    setCurrentAudio(src) {
      this.currentAudio = src
    },
    getCurrentAudioTime() {
      console.log('This audio is ' + this.currentAudio.duration.toFixed(0) + ' seconds long')
    },
    playCurrentAudio() {
      this.currentAudio.play()
    },
    pauseCurrentAudio() {
     this.currentAudio.pause()
    },
    toNextRoute() {
      this.$router.push({ name: this.$store.state.nextRoute, append: true })
      TweenMax.to(window, .5, {scrollTo: 0});
    },
  },
  mounted() {
    [
      // Initial experience statement functions
      // RecordService.putStatements(statements.experienced).then(response => response)
      // RecordService.getStatements().then(response => response)
    ]
    
    /**
     * 
     * Updating the current, next, and previous route information in $store.
     * 
     */
    this.$store.commit('changeCurrentRoute', this.$router.currentRoute.name)
    this.$store.commit('changeNextRoute', false)
    this.$store.commit('changePrevRoute', this.$router.options.routes[this.$store.state.courseRoute].children[1].name)
    
    /**
     * 
     * Update $data with the audio objects you are using in this file. 
     * Audio object through $data will be reactive and scoped correctly.
     * Set the currentAudio Track to the first track.
     * 
     */ 
    this.audioOne = new Audio(require('../assets/0.mp3'))
    this.audioTwo = new Audio(require('../assets/1.mp3'))
    this.audioThree = new Audio(require('../assets/2.mp3'))
    this.audioFour = new Audio(require('../assets/3.mp3'))
    this.setCurrentAudio(this.audioOne)
    
    // GSAP recommends using functions to create each section of your timelines
    const createSlide = function(slide, delay) {
      var tl = new TimelineMax();
      tl.add( TweenMax.to(slide, 1, {opacity: 1, display: 'block'}));
      tl.add( TweenMax.to(slide, 1, {opacity: 0, display: 'none', delay: delay }));
      return tl;
    }

    // build a sequence out of all the timelines by placing each one in a parent timeline
    this.slideMaster = new TimelineMax({paused: true});
    // Slide one
    this.slideMaster.call(this.getCurrentAudioTime, this, "slide1")
    this.slideMaster.add(createSlide(this.$refs.slide1, 10), 'slide1')
    // Slide Two
    this.slideMaster.call(this.pauseCurrentAudio, this, "slide2")
    this.slideMaster.call(this.setCurrentAudio, [ this.audioTwo ], this, "slide2")
    this.slideMaster.call(this.getCurrentAudioTime, this, "slide2")
    this.slideMaster.call(this.playCurrentAudio, this, "slide2")
    this.slideMaster.add(createSlide(this.$refs.slide2, 3), 'slide2')
    // Slide Three
    this.slideMaster.add(createSlide(this.$refs.slide3, 3), 'slide3')
    // Slide Four
    this.slideMaster.add(createSlide(this.$refs.slide4, 5), 'slide4')
    // Callback on end moves to next route
    this.slideMaster.addCallback(this.toNextRoute, '+=3')

    /**
     * 
     * Course Start up function runs once.
     * Autoplay of audio/video may not be allowed after refreshing browser.
     * The below function checks to see if autoplay is allowed.
     * If autoplay is allowed, course will function as usual.
     * If autoplay is NOT allowed, the course will wait for user interaction.
     *
     */
    const promise = this.currentAudio.play()
    if (promise !== undefined) {
      promise.then(_ => {
        console.log('Autoplay is allowed')
        this.slideMaster.play()
        this.playCurrentAudio()
        this.$store.commit('changeIsPlaying', this.$store.state.isPlaying = true)
      }).catch(error => {
        console.log('Autoplay not allowed')
      })
    }
  },
  beforeDestroy() {
    /**
     * 
     * Cleanup functions before moving to next page.
     * 
     */
    this.slideMaster.kill()
    this.pauseCurrentAudio()
    this.$store.commit('changeIsPlaying', this.$store.state.isPlaying = false) // make sure isPlaying state is changed
  },
}
</script>

<style scoped lang="scss">
  img {
    position: relative;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    max-height: 60vh;

    &.hidden {
      opacity: 0;
      display: none;
    }
  }
</style>