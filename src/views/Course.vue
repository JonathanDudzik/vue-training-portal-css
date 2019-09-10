<template>
  <div>
    <NavBar/>
    <div class="columns margin-content-top length-full">
        <div class="column is-2">
             <NavMenu class="section"/>
        </div>
        <div class="column is-10">
            <component :is="selectedContent" class="section"></component>
        </div>
    </div> 
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
    // This margin is determined by the actual size of the NavBar
    .margin-content-top {
        margin-top: 92px;
    }
    .length-full {
        min-height: 90vh;
    }
</style>