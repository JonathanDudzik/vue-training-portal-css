<template>
  <div>
    <NavBar/>
    <div class="columns margin-content-top length-full">
        <div class="column is-8 is-offset-2">
            <router-view></router-view>
            <NavFooter/>
        </div>
    </div> 
  </div>
</template>

<script>
import NavBar from "../components/NavBar"
import NavFooter from '@/components/NavFooter'

export default {
    data() {
        return {
        }
    },
    created() {console.log(this.$refs)},
    components: {
        "NavBar": NavBar,
        "NavFooter": NavFooter,
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