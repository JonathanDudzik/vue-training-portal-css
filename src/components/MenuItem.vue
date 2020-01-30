<template>
    <section>
      <div>
          <div>
              <aside>
                  <ul>
                    <h1>I am the {{ currentSection }} section!</h1>
                    <!-- Each MediumSelector does NOT need to know its own medium -->
                    <!-- The logic for mediumSelector in being decouple from the child component -->
                    <!-- MediumSelector component is only worried about the rendering of all the buttons -->
                    <!-- This click on these medium buttons determines the section and medium -->
                    <MediumSelector v-for="item in CourseTemplate[this.currentSection]" v-bind:key="item">
                        <button @click="mediumSelector(item)">{{ item }} in the {{ currentSection }} section</button>
                    </MediumSelector>
                  </ul>
              </aside>
          </div>
      </div>
    </section>
</template>

<script>
import MediumSelector from '@/components/MediumSelector'

export default {
    components: {
        "MediumSelector": MediumSelector
    },
    props: {
        'currentSection': String
    },
    data() {
        return {
            CourseTemplate: this.$CourseTemplate
        }
    },
    methods: {
        mediumSelector(medium) {
            this.$store.state.selectedSection = this.currentSection
            this.$store.state.selectedMedium = this.$CourseTemplate.pages[medium]
            this.$store.state.showMediumModal = true
        }
    }
} 
</script>