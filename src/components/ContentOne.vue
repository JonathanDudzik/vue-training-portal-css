<template>
    <NavFooter  
      :nextRouteName = routerProps[1].name 
      :nextRoute = routerProps[1].path
    ></NavFooter>
</template>

<script>
import NavFooter from '@/components/NavFooter'
export default {
  components: {
    NavFooter
  },
  computed: {
    routerProps() {
      return this.$router.options.routes
    }
  }
}
</script>

<style lang="scss">

</style>