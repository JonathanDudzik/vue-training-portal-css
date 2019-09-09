<template>
  <div>
    <NavBar/>
    <NavMenu class="section margin"/>
    <component :is="selectedContent" class="section"></component>
  </div>
</template>

<script>
import NavBar from "../components/NavBar"
import NavMenu from "../components/NavMenu"
import ContentOne from "../components/ContentOne"
import ContentTwo from "../components/ContentTwo"
import ContentThree from "../components/ContentThree"


export default {
    components: {
        "NavBar": NavBar,
        "NavMenu": NavMenu,
        "ContentOne": ContentOne,
        "ContentTwo": ContentTwo,
        "ContentThree": ContentThree,
    },
    computed: {
        selectedContent() {
            return this.$store.state.selectedContent;
        }
    }
}
</script>

<style lang="scss" scoped>
.margin {
    margin-top: 70px;
    margin-right: 50%; 
}

</style>