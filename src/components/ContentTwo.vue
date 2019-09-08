<template>
  <p>Hello world,<br>I am here!<br>I am SECOND content</p>
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