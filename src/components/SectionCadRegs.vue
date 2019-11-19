<template>
  <section>
    <div ref="htmlSceneOne" class="container">
      <div class="columns">
        <div class="column is-12">
          <h1 class="title is-size-1-desktop">Why Complete a Corrective Action Document?</h1>
          <h2 class="subtitle is-size-2-desktop">Institutions complete a Corrective Action Document because:</h2>
        </div>
      </div>
      <div class="columns is-vcentered">
        <div class="column is-6 is-offset-1 is-size-4-desktop">
          <ol>
              <li>It is required by federal regulation -7 CFR 226.6 (c)</li>
              <li>To describe how they will correct program violations</li>
          </ol>
        </div>
        <div class="column is-4">
          <figure class="image">
            <img src="../assets/regulations-book.jpg">
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
      tlMaster: null,
      audioOne: null,
      sceneOne: [],
      currentAudio: null,
      audioDuration: null,
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
    getCurrentAudioDuration() {
      const string = this.currentAudio.duration.toFixed(0)
      this.audioDuration = parseInt(string, 10)
      console.log('This audio is ' + this.audioDuration + ' seconds long')
      return this.audioDuration
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
    this.$store.commit('changeNextRoute', this.$router.options.routes[this.$store.state.courseRoute].children[5].name)
    this.$store.commit('changePrevRoute', this.$router.options.routes[this.$store.state.courseRoute].children[3].name)

    /**
     * 
     * Populate $data with objects on this page. 
     * Objects through $data will be reactive and scoped correctly.
     * 
     */ 
    this.audioOne = new Audio(require('../assets/4.mp3'))
    this.sceneOne = [this.$refs.htmlSceneOne]
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
    this.tlMaster.call(this.getCurrentAudioDuration, this, "elOne")
    this.tlMaster.add(tlScenes([this.sceneOne], 24), 'elOne')
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

</style>