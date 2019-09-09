<template>
  <div class="container">
    <nav class="level is-mobile">
      <div class="level-left">
        <div v-if="prevContentIdentifier">
          <div class="level-item">
            <button class="button is-size-3" @click="navPrev">{{ prevContentIdentifier }}</button>
          </div>
        </div>
      </div>
      <div class="level-right">
        <div v-if="nextContentIdentifier">
          <div class="level-item">
            <button class="button is-size-3" @click="navNext">{{ nextContentIdentifier }}</button>
          </div>
        </div>
      </div>
    </nav>
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