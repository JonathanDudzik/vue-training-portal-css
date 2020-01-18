<template>
  <div v-if="nextRoute">
    <div class="level-item" @click='toNextRoute'>
      <p>{{ nextRoute }}</p>
      <p>&#10140;</p>
    </div>
  </div>
</template>

<script>
const tween = new TimelineMax()
export default {
  computed: {
      // nextRoute and prevRoute values set in current routed view
      nextRoute: function() { 
        return this.$store.state.nextRoute
      },
       prevRoute: function() { 
        return this.$store.state.prevRoute
      },
  },
  methods: {
    toNextRoute() {
      this.$router.push({ name: this.nextRoute, append: true })
      tween.to(window, .5, {scrollTo: 0});
    },
    toPrevRoute() {
      this.$router.push({ name: this.prevRoute, append: true })
      tween.to(window, .5, {scrollTo: 0});
    },
  }
}
</script>

<style lang="scss" scoped>
.level-item {
  cursor: pointer;
}
</style>