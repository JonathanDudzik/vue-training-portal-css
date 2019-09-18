<template>
<transition name="fade">
  <div>
    <NavBar/>
    <div class="columns margin-content-top length-full">
        <div class="column is-8 is-offset-2">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
            <NavFooter/>
        </div>
    </div> 
  </div>
</transition>
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
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>