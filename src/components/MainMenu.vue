<template>
  <div>
    <div
      v-for="section in $store.state.lessonTemplate"
      v-bind:class="'card-grid-item' + '-' + section.index"
      v-bind:currentSection="section"
      v-bind:key="section.index">
      <h1>{{ section.title }}</h1>
      <div v-for="(item, index) in section.partArray" v-bind:key="index">
        <div @click="mediumSelector(item.partComponentList)">
          <svg class="icon" v-if="item.complete == false">
            <use v-bind:href="$store.state.iconReference.arrow"></use>
          </svg>
          <svg class="check" v-if="item.complete == true">
            <use v-bind:href="$store.state.iconReference.check"></use>
          </svg>
          <p class="title"> {{ item.partName }}</p>
        </div>  
      </div>
    </div>
  </div>


</template>

<script>
export default {
  methods: {
    mediumSelector(componentList) {
      console.log(this.$store.state.viewComponentList);
      this.$store.state.viewComponentList = componentList
      console.log(this.$store.state.viewComponentList);
    }
  }
}
</script>

<style scoped>

/***********************************
Begin upper part of card styles
************************************/


/***********************************
Begin middle part of card styles
************************************/


</style>>