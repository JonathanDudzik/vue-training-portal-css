<template>
    <section>
      <NavBarTop/>
      <OptionMenu/>
      <MediumModal v-if="$store.state.showMediumModal === true"/>
      <div>
          <div>
              <aside>
                  <ul>
                    <!-- The use of this prop makes sure that each MenuItem knows its own currentSection -->
                    <MenuItem v-for="item in CourseTemplate.sections" v-bind:currentSection="item" v-bind:key="item"/>
                  </ul>
              </aside>
          </div>
      </div>
    </section>
</template>

<script>
import NavBarTop from '@/components/NavBarTop'
import OptionMenu from '@/components/OptionMenu'
import MenuItem from '@/components/MenuItem'
import MediumModal from '@/components/MediumModal'

export default {
  components: {
    "NavBarTop": NavBarTop,
    "OptionMenu": OptionMenu,
    "MenuItem": MenuItem,
    "MediumModal": MediumModal
  },
  data() {
    return {
      CourseTemplate: this.$CourseTemplate
    }
  }
} 
</script>