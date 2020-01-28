<template>
    <section>
      <NavBarTop/>
      <MediumModal v-if="$store.state.showMediumModal === true"/>
      <div>
          <div>
              <aside>
                  <ul>
                    <!-- The use of this prop makes sure that each MenuItem knows its own currentSection -->
                    <MenuItem v-for="item in CourseTemplate.sections" v-bind:currentSection="item"/>
                  </ul>
              </aside>
          </div>
      </div>
    </section>
</template>

<script>
import CourseTemplate from '../test/CourseTemplate'

import NavBarTop from '@/components/NavBarTop'
import MenuItem from '@/components/MenuItem'
import MediumModal from '@/components/MediumModal'

export default {
  components: {
    "NavBarTop": NavBarTop,
    "MenuItem": MenuItem,
    "MediumModal": MediumModal
  },
  data() {
    return {
      CourseTemplate: CourseTemplate
    }
  }
} 
</script>