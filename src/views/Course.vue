<template>
  <div>
    <NavBar/>
    <NavMenu class="section margin"/>
    <component :is="selectedContent" class="section margin"></component>
    <NavFooter/>
  </div>
</template>

<script>
import NavBar from "../components/NavBar"
import NavMenu from "../components/NavMenu"
import NavFooter from "../components/NavFooter"
import ContentOne from "../components/ContentOne"
import ContentTwo from "../components/ContentTwo"
import ContentThree from "../components/ContentThree"

export default {
    data() {
        return {
            componentsToUse: {
                NavBar,
                NavMenu,
                NavFooter,
                ContentOne,
                ContentTwo,
                ContentThree,
            }
        }
    },
    beforeMount() {
        this.$options.components = this.componentsToUse
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
    margin-top: 30px;
}

</style>