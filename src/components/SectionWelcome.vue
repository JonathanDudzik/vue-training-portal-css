<template>
  <section>
    <div class="container content">
      <h1 ref="gsapObjOne" class="gsap-object one">How to complete a Corrective Action Document</h1>
      <h2 ref="gsapObjTwo" class="gsap-object two">NC Department of Health and Human Services</h2>
      <h2 ref="gsapObjThree" class="gsap-object three">Child and Adult Care Food Program</h2>
      <figure>
        <img ref="gsapObjFour" class="gsap-object four" src="../assets/logo.png">
      </figure>
      <figure>
        <img ref="gsapObjFive" class="gsap-object five" src="../assets/scene2.jpg">
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
    this.$store.commit('changeNextRoute', this.$router.options.routes[this.$store.state.courseRoute].children[1].name)
    this.$store.commit('changePrevRoute', false)

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
    const tlOne = function(objRef) {
      const gsapObj = new TimelineMax();
      gsapObj.add( TweenMax.from(objRef, 1, {opacity: 0, display: 'none'}));
      gsapObj.add( TweenMax.to(objRef, 1, {opacity: 1, display: 'block'}));
      return gsapObj
    }
    const tlTwo = function(objRef) {
      const gsapObj = new TimelineMax();
      gsapObj.add( TweenMax.from(objRef, 1, {opacity: 0, display: 'none'}));
      gsapObj.add( TweenMax.to(objRef, 1, {opacity: 1, display: 'block'}));
      return gsapObj
    }
    const tlThree = function(objRef) {
      const gsapObj = new TimelineMax();
      gsapObj.add( TweenMax.from(objRef, 1, {opacity: 0, display: 'none'}));
      gsapObj.add( TweenMax.to(objRef, 1, {opacity: 1, display: 'block'}));
      return gsapObj
    }
    const tlFour = function(objRef) {
      const gsapObj = new TimelineMax();
      gsapObj.add( TweenMax.from(objRef, 1, {opacity: 0, display: 'none'}));
      gsapObj.add( TweenMax.to(objRef, 1, {opacity: 1, display: 'block'}));
      return gsapObj
    }
    const tlFive = function(objRef) {
      const gsapObj = new TimelineMax();
      gsapObj.add( TweenMax.from(objRef, 1, {opacity: 0, display: 'none'}));
      gsapObj.add( TweenMax.to(objRef, 1, {opacity: 1, display: 'block'}));
      return gsapObj
    }
  
    // build a sequence out of all the timelines by placing each one in a parent timeline
    this.slideMaster = new TimelineMax({paused: true});
    this.slideMaster.add(tlOne(this.$refs.gsapObjOne, 3))
    this.slideMaster.add(tlTwo(this.$refs.gsapObjTwo, 3))
    this.slideMaster.add(tlThree(this.$refs.gsapObjThree, 3))
    this.slideMaster.add(tlFour(this.$refs.gsapObjFour, 3))
    this.slideMaster.add(tlFive(this.$refs.gsapObjFive, 3))
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
  div.container {
    position: relative;
    height: 60vw;
    width: 70vw;
    border: solid;
  }
  .gsap-object {
    display: block;
    position: absolute;

    &.one{
      font-size: 3vw;
      top: 10%;
    }
    &.two{
      font-size: 3vw;
      bottom: 10%;
    }
    &.three{
      font-size: 3vw;
      top: 30%;
    }
    &.four{
      width: 30%;
      top: 1%;
    }
    &.five{
      width: 30%;
      top: 50%;
    }
  }
</style>