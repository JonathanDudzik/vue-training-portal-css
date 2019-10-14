<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <!-- START TEXT -->
          <p ref="text0">NC Department of Health and Human Services</p>
          <p ref="text1">How to Complete a Corrective Action Document</p>
          <p ref="text2">Child and Adult Care Food Program - Nutrition Services Branch - Division of Public Health</p>
        </div>
        <div class="column">
          <!-- START IMAGES -->
          <figure class=imageCanvas>
            <img ref="image0" class="image0" src="../assets/canvas.jpg">
          </figure>
          <figure>
            <img ref="image1" class="image1 hidden" src="../assets/scene1.png">
          </figure>
          <figure>
            <img ref="image2" class="image2 hidden" src="../assets/scene2.jpg">
          </figure>
          <figure>
            <img ref="image3" class="image3 hidden" src="../assets/scene3.png">
          </figure>
          <figure>
            <img ref="image4" class="image4 hidden" src="../assets/scene4.jpg">
          </figure>
          <figure>
            <img ref="image5" class="image5 hidden" src="../assets/scene5.png">
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
    const scene1 = function(obj) {
      var image1 = new TimelineMax();
      image1.add( TweenMax.to(obj, 1, {opacity: 1, display: 'block'}));
      image1.add( TweenMax.to(obj, 1, {x: 2000, y: 100, delay: 1 }));
      image1.add( TweenMax.to(obj, 1, {x: 0, opacity: 0, display: 'none'}));
      return image1;
    }
    const scene2 = function(obj) {
      var image1 = new TimelineMax();
      image1.add( TweenMax.to(obj, 1, {opacity: 1, display: 'block'}));
      image1.add( TweenMax.to(obj, 1, {x: 20, y: 100, delay: 1 }));
      image1.add( TweenMax.to(obj, 1, {x: 0, opacity: 0, display: 'none'}));
      return image1;
    }

    // build a sequence out of all the timelines by placing each one in a parent timeline
    this.slideMaster = new TimelineMax({paused: true});
    this.slideMaster.add(scene1(this.$refs.image1))
    this.slideMaster.add(scene2(this.$refs.image2))
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
  div.column {
    position: relative;
    height: 60vh;
  }
  figure.imageCanvas {
    position: relative;
  }
  img {
    position: absolute;
    // display: block;
    top: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    max-height: 100%;

    &.hidden {
      opacity: 0;
      display: none;
    }
  }
</style>