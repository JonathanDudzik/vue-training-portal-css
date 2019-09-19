<template>
  <NavMenu/>
</template>

<script>
import NavMenu from "../components/NavMenu"

export default {
  components: {
    "NavMenu": NavMenu,
  },
  data() {
    return {}
  },
  methods: {
    toggleMenuState() {
        if(this.$router.currentRoute.path == "/menu") {
            this.$router.push('/course')
        }else {
            this.$router.push('/menu')
        }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>