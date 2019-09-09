<template>
  <div>
    <NavFooter  
      :nextContentIdentifier="contentProps[1].identifier"
    ></NavFooter>
  </div>
</template>

<script>
import NavFooter from '@/components/NavFooter'
export default {
  components: {
    NavFooter
  },
  computed: {
    contentProps() {
      return this.$store.state.navMenuInfo
    }
  }
}
</script>

<style lang="scss">

</style>