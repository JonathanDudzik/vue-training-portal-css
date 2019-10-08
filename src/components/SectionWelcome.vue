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
      audioOne: null,
    }
  },
  destroyed() {
    // always pause and reset media on page change
    this.audio1.pause()
    this.slideMaster.pause()
  },
  mounted() {
    // these store commits update the state to the current location of the course
    this.$store.commit('changeCurrentRoute', this.$router.currentRoute.name)
    this.$store.commit('changeNextRoute', this.$router.options.routes[3].children[2].name)
    this.$store.commit('changePrevRoute', this.$router.options.routes[3].children[0].name)

    // defining values found in the vue data function above
    this.audio1 = new Audio(require('../assets/welcome.mp3'));
    this.slideMaster = new TimelineMax({paused: true});
  
    // it is recommended using functions to create each section 
    // of your complex timelines.
    const createSlide = function(slide, delay) {
      var tl = new TimelineMax();
      tl.add( TweenMax.to(slide, 1, {opacity: 1 }));
      tl.add( TweenMax.to(slide, 1, {opacity: 0, delay: delay }));
      return tl; // it is important to return the tween.
    }

    // build a sequence out of all the timelines by placing each one in a parent timeline using
    this.slideMaster.add(createSlide(this.$refs.slide1, 0))
    this.slideMaster.add(createSlide(this.$refs.slide2, 0.5))
    this.slideMaster.add(createSlide(this.$refs.slide3, 0.2))
    this.slideMaster.add(createSlide(this.$refs.slide4, 0.5))
    this.slideMaster.addCallback(this.toNextRoute, '+=3')

  },
  computed: {
    playAll() {
      return this.$store.state.playMedia
    }
  },
  watch: {
    playAll() {
      if(this.$store.state.playMedia == false) {
        this.slideMaster.play()
        this.audio1.play()
      } else {
        this.slideMaster.pause()
        this.audio1.pause()
      }
    }
  },
  methods: {
    toNextRoute() {
      this.$router.push({ name: this.$store.state.nextRoute, append: true })
      TweenMax.to(window, .5, {scrollTo: 0});
    },
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