<template>
    <section>
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
    </section>
</template>

<script>
import ContentSelector from '@/components/ContentSelector'

export default {
  components: {
    "ContentSelector": ContentSelector,
  }
}
</script>

<style scoped>
    
    .grid-container {


        background-color:khaki;
        width: 100%;
        height: 100%;
        padding-top: 10%;
        
        /* grid styles */
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 20px;
        grid-column-gap: 20px;
    }

</style>