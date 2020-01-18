<template>
  <div v-if="prevRoute">
    <div class="level-item" @click='toPrevRoute'>
      <p style="transform: rotate(0.5turn);">&#10140;</p>
      <p><em>{{ prevRoute }}</em></p>
    </div>
  </div>
</template>

<script>
const tween = new TimelineMax()
export default {
  computed: {
    //prevRoute values set in current routed view
      prevRoute: function() { 
      return this.$store.state.prevRoute
    },
  },
  methods: {
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