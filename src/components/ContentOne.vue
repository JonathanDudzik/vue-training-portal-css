<template>
  <div>
    <h1 class="is-size-1">ONE</h1>
    <NavFooter  
      :nextContentIdentifier="contentProps[1].identifier"
      :nextContentSelector="contentProps[1].contentSelector"
    ></NavFooter>
  </div>
</template>

<script>
import NavFooter from '@/components/NavFooter'
import axios from 'axios'
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