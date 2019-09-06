<template>
    <NavFooter 
      :previousRouteName = routerProps[1].name 
      :nextRouteName = routerProps[2].name 
      :previousRoute = routerProps[1].path 
      :nextRoute = routerProps[2].path
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