<template>
  <div>
    <h1 class="is-size-1">TWO</h1>
    <NavFooter  
      :prevContentIdentifier="contentProps[0].identifier"
      :prevContentSelector="contentProps[0].contentSelector"
      :nextContentIdentifier="contentProps[2].identifier"
      :nextContentSelector="contentProps[2].contentSelector"
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