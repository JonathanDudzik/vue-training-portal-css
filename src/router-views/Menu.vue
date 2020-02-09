<template>
    <section>
      <HeaderContainer/>
      <OptionsContainer/>
      <ModalContainer v-if="$store.state.showMediumModal === true"/>
      <div>
        <ul>
          <!-- The use of this prop makes sure that each SectionsSelector knows its own currentSection -->
          <SectionsSelector v-for="section in CourseTemplate" v-bind:currentSection="section" v-bind:key="section.name"/>
        </ul>
      </div>
    </section>
</template>

<script>
import HeaderContainer from '@/components/HeaderContainer'
import OptionsContainer from '@/components/OptionsContainer'
import SectionsSelector from '@/components/SectionsSelector'
import ModalContainer from '@/components/ModalContainer'

export default {
  components: {
    "HeaderContainer": HeaderContainer,
    "OptionsContainer": OptionsContainer,
    "SectionsSelector": SectionsSelector,
    "ModalContainer": ModalContainer
  },
  data() {
    return {
      CourseTemplate: this.$CourseTemplate
    }
  }
} 
</script>