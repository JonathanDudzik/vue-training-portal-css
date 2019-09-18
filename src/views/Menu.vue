<template>
    <transition name="fade" mode="out-in">
      <NavMenu/>
    </transition>
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity 5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
  }

</style>