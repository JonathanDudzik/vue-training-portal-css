<template>
  <div class="card-subgrid-container">

    <div class="title-grid-item">
      <h1 >{{ currentSection.index }} {{ currentSection.title }}</h1>
    </div>

    <div class="selector-grid-item" v-for="(mediaOption, index) in currentSection.media" v-bind:key="index" v-bind:class="'selector-grid-item' + '-' + index" @click="mediumSelector(mediaOption.name)">
      <div class="button">
        <svg class="media">
          <use v-bind:href="mediaOption.icon"></use>
        </svg>
        <svg class="check" v-if="mediaOption.complete">
          <use href="sprite.svg#icon-check"></use>
        </svg>
      </div>
    </div>
  
    <div class="discription-grid-item" v-bind:class="'discription-grid-item' + '-' + currentSection.index">
      <h1>{{ currentSection.discription }}</h1>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    'currentSection': Object
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
.card-grid-item {
  box-shadow: var(--level-3);
  border-radius: 5px;
  width: 100%;
  height: 100%;
  padding: 3px;
}

.card-grid-item-1 {
  background-color: cornflowerblue;
}

.card-grid-item-2 {
  background-color: blueviolet;
}

.card-subgrid-container {
  width: 100%;
  height: 100%;

  /* grid container rules */
  display: grid;
  grid-template-rows: 2fr 2fr 2fr 10fr;   /* 19fr total */
  grid-template-columns: repeat(4, 1fr);
}

.title-grid-item {
  grid-row: 1 / 3;
  grid-column: 1 / -1;

  border-bottom: 2px black solid;
}

.selector-grid-item {
  grid-row: 2 / 4;
}

.selector-grid-item .button {
  box-shadow: var(--level-1);
  height: 4rem;
  width: 4rem;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: orange;

  /* flexbox rules - can you do more with flexbox here to get rid of media an check classes??? */
  display: flex;
}

.selector-grid-item-0 {
  grid-column: 1 / span 1;
}

.selector-grid-item-1 {
  grid-column: 2 / span 1;
}

.selector-grid-item-2 {
  grid-column: 3 / span 1;
}

.discription-grid-item {
  grid-row: 4 / 5;
  grid-column: 1 / -1
}

.discription-grid-item-1 {
  background-color: blue;
}

.discription-grid-item-2 {
  background-color: red;
}
</style>>