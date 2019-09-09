<template>
  <div>
    <h1 class="is-size-1">THREE</h1>
    <NavFooter  
      :prevContentIdentifier="contentProps[1].identifier"
      :prevContentSelector="contentProps[1].contentSelector"
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