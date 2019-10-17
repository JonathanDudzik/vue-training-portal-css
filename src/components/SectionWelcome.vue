<template>
  <section>
    <div class="container content">

      <div ref="elSceneOne">
        <h1 class="gsap-object one">How to complete a Corrective Action Document</h1>
        <h2 class="gsap-object two">NC DHHS</h2>
        <h2 class="gsap-object three">Child and Adult Care Food Program</h2>
        <p class="gsap-object three">Nutrition Services Branch</p>
        <p class="gsap-object three">Division of public health</p>
        <figure>
          <img ref="elF" class="gsap-object five" src="../assets/nc-logo.jpg">
        </figure>
      </div>
      
      <div ref="elSceneTwo">
        <h1 class="gsap-object one">This content is second</h1>
        <h2 class="gsap-object two">Learning Obejctives!</h2>
        <p class="gsap-object three">TESTING!</p>
        <figure>
          <img ref="elF" class="gsap-object five" src="../assets/logo.png">
        </figure>
      </div>
    
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tlMaster: null,
      audioOne: null,
      audioTwo: null,
      audioThree: null,
      audioFour: null,
      sceneOne: [],
      sceneTwo: [],
      sceneThree: [],
      sceneFour: [],
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
    /**
     * 
     * These functions are dependent on the computed properties
     * 
     */
    resetReplayAll() { 
      // 1. stop the gsap slide timeline
      this.tlMaster.kill()
      // 2. pause the current audio track
      this.pauseCurrentAudio()
      // 3. reset that track to beginning
      this.currentAudio.currentTime = 0
      // 4. set the currentAudio to the first track
      this.setCurrentAudio(this.audioOne)
      // 5. reset that track to beginning
      this.currentAudio.currentTime = 0
      // 6. start the gsap timeline from beginning
      this.tlMaster.play(0)
      // 7. start playing audio track
      this.playCurrentAudio()
      // 8. make sure pause button is shown
      this.$store.commit('changeIsPlaying', this.$store.state.isPlaying = true)
      // there must be an easier way to do this...
    },
    playAll() {
      if(this.$store.state.isPlaying == true) {
        this.tlMaster.play()
        this.playCurrentAudio()
      } else {
        this.tlMaster.pause()
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
    this.$store.commit('changeNextRoute', this.$router.options.routes[this.$store.state.courseRoute].children[1].name)
    this.$store.commit('changePrevRoute', false)

    /**
     * 
     * Populate $data with objects on this page. 
     * Objects through $data will be reactive and scoped correctly.
     * 
     */ 
    this.audioOne = new Audio(require('../assets/1.mp3'))
    this.audioTwo = new Audio(require('../assets/2.mp3'))
    this.audioThree = new Audio(require('../assets/3.mp3'))
    this.audioFour = new Audio(require('../assets/4.mp3'))
    this.sceneOne = [this.$refs.elSceneOne]
    this.sceneTwo = [this.$refs.elSceneTwo]
    // Set the currentAudio Track to the first track.
    this.setCurrentAudio(this.audioOne)


    /**
     * 
     * GSAP recommends using functions to create each timeline section of your timelines
     * 
     */
    const tlScenes = function(objRef, delay) {
      const gsap = new TimelineMax();
      gsap.add( TweenMax.from(objRef, 1, {opacity: 0, display: 'none'}));
      gsap.add( TweenMax.to(objRef, 1, {opacity: 1, display: 'block', delay: delay}));
      gsap.add( TweenMax.to(objRef, 1, {opacity: 0, display: 'none'}));
      return gsap
    }
  
    /**
     * 
     * Build a sequence out of all the timelines by placing each one in a parent timeline
     * 
     */ 
    this.tlMaster = new TimelineMax({paused: true});
    // First scene start
    this.tlMaster.call(this.getCurrentAudioTime, this, "elOne")
    this.tlMaster.add(tlScenes([this.sceneOne], 19), 'elOne')
    // Second scene start
    this.tlMaster.call(this.pauseCurrentAudio, this, "gsapTwo")
    this.tlMaster.call(this.setCurrentAudio, [ this.audioTwo ], this, "gsapTwo")
    this.tlMaster.call(this.getCurrentAudioTime, this, "gsapTwo")
    this.tlMaster.call(this.playCurrentAudio, this, "gsapTwo")
    this.tlMaster.add(tlScenes([this.sceneTwo], 1), 'gsapTwo')
    

    // Callback on end moves to next route
    this.tlMaster.addCallback(this.toNextRoute, '+=3')

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
        this.tlMaster.play()
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
    this.tlMaster.kill()
    this.pauseCurrentAudio()
    this.$store.commit('changeIsPlaying', this.$store.state.isPlaying = false) // make sure isPlaying state is changed
  },
}
</script>

<style scoped lang="scss">
  // div.container {
  //   position: relative;
  //   height: 40vw;
  //   width: 110vw;
  //   // border: solid;
  // }
  // .gsap-object {
  //   display: block;
  //   position: absolute;

  //   &.one{
  //     font-size: 3vw;
  //     top: 10%;
  //   }
  //   &.two{
  //     font-size: 3vw;
  //     bottom: 10%;
  //   }
  //   &.three{
  //     font-size: 3vw;
  //     top: 30%;
  //   }
  //   &.four{
  //     width: 30%;
  //     top: 1%;
  //   }
  //   &.five{
  //     width: 30%;
  //     top: 50%;
  //   }
  // }
</style>