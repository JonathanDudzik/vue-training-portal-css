<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-size-1">
        Welcome
      </h1>
      <!-- <div class="is-divider"></div> "data-content" can be used to add text -->
    </div>
    <NavFooter  
      :nextContentIdentifier="contentProps[1].identifier"
      :nextContentSelector="contentProps[1].contentSelector"
    ></NavFooter>
  </section>
</template>

<script>
import NavFooter from '@/components/NavFooter'
import RecordService from '@/services/AxiosLrsCalls'
import statements from '@/services/ExperienceStatements'


export default {
  components: {
    NavFooter
  },
  data( ) {
    return {}  
  },
  created() {
    RecordService.putStatements(statements.experienced).then(response => response)
    RecordService.getStatements().then(response => response)
  },
  computed: {
    contentProps() {
      return this.$store.state.navMenuInfo
    },
  },
  methods: {}
}
</script>

<style lang="scss">

</style>