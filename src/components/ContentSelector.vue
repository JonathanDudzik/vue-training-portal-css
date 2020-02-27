<template>
  <div class="grid-container">
    <h1 class="upper-grid-item">{{currentSection.index}} {{ currentSection.title}}</h1>
    <div class="center-grid-item">
      <div v-for="(mediaOption, index) in currentSection.media" v-bind:key="index" @click="mediumSelector(mediaOption.name)">
        <svg class="center-grid-btn">
          <use v-bind:href="mediaOption.icon"></use>
        </svg>
        <svg class="test-svg">
          <use v-if="mediaOption.complete" href="sprite.svg#icon-check"></use>
        </svg>
      </div>
    </div>
    <h1 v-bind:class="'lower-grid-item' + '-' + currentSection.index" class="lower-grid-item">{{ currentSection.discription }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    'currentSection': Object
  },
  data() {
    return {
      complete: false
    }
  },
  methods: {
    mediumSelector(medium) {
      this.$store.state.selectedModal = this.currentSection.media[medium].name
      this.$store.state.showModal = true
    }
  }
}
</script>

<style scoped>
.test-svg {
  width: 2rem;
  height: 2rem;
}

.center-grid-btn {
  display: block;
  box-shadow: var(--level-1);
  margin-left: 0.5rem;
  height: 3.5rem;
  width: 3.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: orange;
}

.card {
  box-shadow: var(--level-3);
  border-radius: 5px;
  width: 100%;
  height: 100%;
  padding: 3px;

  /* grid container rules */
  display: grid;
  grid-template-rows: 2fr 1fr 1fr 4fr;
  grid-template-columns: 4fr 1fr;
}

.upper-grid-item {
  /* grid item rules */
  grid-row: 1 / 3;
  grid-column: 1 / -1;
}

.upper-right-grid-item {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  justify-self: end;
}

.center-grid-item {
  /* grid item rules */
  grid-row: 2 / 4;
  grid-column: 1 / -1;
  z-index: 1;

  /* flex container rules*/
  display: flex;
  justify-content: left;
  align-items: center;
}

.lower-grid-item {
  border-top: solid 2px black;

  /* grid item rules */
  grid-row: 3 / 5;
  grid-column: 1 / -1;
}

.lower-grid-item-1 {
  background-color: blueviolet;
}

.card-2 {
  background-color: blueviolet;
}
</style>>