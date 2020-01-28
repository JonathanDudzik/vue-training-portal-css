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
                    <MediumSelector v-for="item in CourseTemplate[this.currentSection]">
                        <button @click="mediumSelector(item)">{{ item }} in the {{ currentSection }} section</button>
                    </MediumSelector>
                  </ul>
              </aside>
          </div>
      </div>
    </section>
</template>

<script>
import CourseTemplate from '../test/CourseTemplate'
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
        CourseTemplate: CourseTemplate
        }
    },
    methods: {
        mediumSelector(medium) {
            this.$store.state.selectedSection = this.currentSection
            this.$store.state.selectedMedium = CourseTemplate.pages[medium]
            this.$store.state.showMediumModal = true
        }
    }
} 
</script>