<template>
  <div class="section">
  <div class="container content">
    <nav class="level is-mobile">
      <div class="level-left">
        <div v-if="prevContentIdentifier">
          <div class="level-item" @click="navPrev">
            <p class="is-size-3 is-marginless" style="transform: rotate(0.5turn);">&#10140;</p>
            <p class="is-size-3 is-marginless"><em>{{ prevContentIdentifier }}</em></p>
          </div>
        </div>
      </div>
      <div class="level-right">
        <div v-if="nextContentIdentifier">
          <div class="level-item" @click="navNext">
            <p class="is-size-3 is-marginless">{{ nextContentIdentifier }}</p>
            <p class="is-size-3 is-marginless">&#10140;</p>
          </div>
        </div>
      </div>
    </nav>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    nextContentIdentifier: String,
    nextContentSelector: String,
    prevContentIdentifier: String,
    prevContentSelector: String
  },
  methods: {
    navNext() {
      this.$store.commit("selectFromStore", this.nextContentSelector)
    },
    navPrev() {
      this.$store.commit("selectFromStore", this.prevContentSelector)
    }
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