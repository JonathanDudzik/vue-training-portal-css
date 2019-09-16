<template>
  <div>
    <NavBar/>
    <div class="columns margin-content-top length-full">
        <p>{{ posts.config ? posts.config.length : "0" }}</p>
        <div class="column is-2">
             <NavMenu/>
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
    data() {
        return {
            posts: {}
        }
    },
    created() {},
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
        margin-top: 134px;
    }
    .length-full {
        min-height: 80vh;
    }
</style>