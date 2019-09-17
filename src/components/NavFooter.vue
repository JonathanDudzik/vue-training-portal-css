<template>
  <section class="section">
    <div class="container content">
      <nav class="level is-mobile">
        <div class="level-left">
          <div v-if="prevRoute">
            <div class="level-item" @click='toPrevRoute'>
              <p class="is-size-5 is-marginless" style="transform: rotate(0.5turn);">&#10140;</p>
              <p class="is-size-5 is-marginless"><em>{{ prevRoute }}</em></p>
            </div>
          </div>
        </div>
        <div class="level-right">
          <div v-if="nextRoute">
            <div class="level-item" @click='toNextRoute'>
              <p class="is-size-5 is-marginless">{{ nextRoute }}</p>
              <p class="is-size-5 is-marginless">&#10140;</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
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
    },
    toPrevRoute() {
      this.$router.push({ name: this.prevRoute, append: true })
    },
  }
}
</script>

<style lang="scss" scoped>
.my-footer {
  position: fixed;
  top: 60vh;
  left: 0vh;
}

.level-item {
  cursor: pointer;
}

</style>