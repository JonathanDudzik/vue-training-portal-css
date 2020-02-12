<template>
      <div class="grid-container">
          <!-- The use of this prop makes sure that each SectionsSelector knows its own currentSection -->
          <ContentSelector
            v-for="section in this.$CourseTemplate" 
            v-bind:currentSection="section" 
            v-bind:key="section.name"
            class="card"
            v-bind:class="'card' + '-' + section.name">
          </ContentSelector>
      </div>
</template>

<script>
import ContentSelector from '@/components/ContentSelector'

export default {
  components: {
    "ContentSelector": ContentSelector,
  }
}
</script>

<style>
    
    /* grid containers cannot have scoped css! */
    .grid-container {
        background-color:khaki;

        /* grid item styles */
        grid-row: 2/3;
        grid-column: 1/2;
        
        /* grid contianer styles */
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: row;
        grid-auto-rows: auto;
        grid-row-gap: 20px;
        grid-column-gap: 20px;
        align-items: center;
        justify-items: center;
    }

</style>