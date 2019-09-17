<template>
  <div>
    <NavMenu/>
    <BtnMenuCourse/>
  </div>
</template>

<script>
import NavMenu from "../components/NavMenu"
import BtnMenuCourse from "../components/BtnMenuCourse"

export default {
  components: {
    "NavMenu": NavMenu,
    "BtnMenuCourse": BtnMenuCourse
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