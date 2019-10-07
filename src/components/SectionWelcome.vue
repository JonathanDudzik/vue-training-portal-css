<template>
  <section class="section">
    <div class="container">
      <figure>
        <img ref="gsapImageOne" class="imageOne" src="../assets/background-blue-solid-1.png">
      </figure>
      <figure>
        <img ref="gsapImageTwo" class="imageTwo" src="../assets/background-blue-solid-2.png">
      </figure>
      <figure>
        <img ref="gsapImageThree" class="imageThree" src="../assets/background-blue-solid-3.png">
      </figure>
      <figure>
        <img ref="gsapImageFour" class="imageFour" src="../assets/background-blue-solid-4.png">
      </figure>
    </div>
    <button class="is-large" ref="welcomeCaptionsOne" @click="playAnim">Play Animation</button>
    <button class="is-large" ref="welcomeCaptionsOne" @click="pauseAnim">Pause Animation</button>
    <!-- <button class="is-large" ref="welcomeCaptionsOne" @click="toNextRoute">next</button> -->
  </section>
</template>

<script>
/*********************************************************************
* import only the objects from services.js that you need
* in this case, the tl object and the function "setTimeline".
*
* When called setTimeline sets up the tl object,
* making it ready to play
**********************************************************************/
import { tl, setSlide } from '../services/Timelines'

export default {
  components: {
  },
  data() {
    return {
      gsapImageOne: null,
      gsapImageTwo: null,
      gsapImageThree: null,
      gsapImageFour: null,
      gsapTextOne: null,
      gsapTextTwo: null,
      gsapTextThree: null,
      gsapTextFour: null,
      gsapAudioOne: null,
    }
  },
  destroyed() {
    // always pause and reset media on page change
    this.gsapAudioOne.pause()
    tl.clear()
    tl.pause(0)
  },
  mounted() {
    // these store commits update the state to the current location of the course
    this.$store.commit('changeCurrentRoute', this.$router.currentRoute.name)
    this.$store.commit('changeNextRoute', this.$router.options.routes[3].children[2].name)
    this.$store.commit('changePrevRoute', this.$router.options.routes[3].children[0].name)

    // defining values found in the vue data function above
    this.gsapImageOne = this.$refs.gsapImageOne
    this.gsapImageTwo = this.$refs.gsapImageTwo
    this.gsapImageThree = this.$refs.gsapImageThree
    this.gsapImageFour = this.$refs.gsapImageFour
    this.gsapTextOne = this.$refs.gsapTextOne
    this.gsapTextTwo = this.$refs.gsapTextTwo
    this.gsapTextThree = this.$refs.gsapTextThree
    this.gsapTextFour = this.$refs.gsapTextFour
    this.gsapAudioOne = new Audio(require('../assets/welcome.mp3'));

    // calls the function from Timeline.js that set the tl object up
    setSlide(this.gsapImageOne, this.gsapImageTwo, this.gsapImageThree, this.gsapImageFour, this.gsapAudioOne)
  },
  methods: {
    playAnim() {
      this.gsapAudioOne.play()
      tl.play() // this function calls the now ready to play tl object
    },
    pauseAnim() {
      this.gsapAudioOne.pause()
      tl.pause()
    },
    // toNextRoute() {
    //   this.$router.push({ name: this.$store.state.nextRoute, append: true })
    //   tween.to(window, .5, {scrollTo: 0});
    // },
  }
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

// const captions = ["Welcome to the North Carolina Child and Adult Care Food Program webinar on Child Eligibility Applications.",
// "This is an  introductory training for staff who are responsible for CACFP recordkeeping.",
// "You will learn about child Income Eligibility application requirements, see a sample child Eligibility application form developed by the state agency, and receive tips on maintaining eligibility documentation.",
// "You will also be taken through some scenarios to help complete the state agency sample form successfully.",
// "Please note, we have a separate training for adult Income Eligibility applications which can be found at nutritionnc.com, on the Special Nutrition Programs training page. ",
// "Next, we will discuss how to navigate this webinar."
// ]