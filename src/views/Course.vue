<template>
  <section class="section" style="padding-left: 0;">
    <NavBar/>
    <div class="columns length-full">
        <div class="column is-8 is-offset-2 margin-content-top">
            <ModalHelp v-if="this.$store.state.showHelpModal"/>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
            <NavFooter/>
        </div>
    </div> 
  </section>
</template>

<script>
import NavBar from '@/components/NavBar'
import NavFooter from '@/components/NavFooter'
import ModalHelp from '@/components/ModalHelp'

export default {
    data() {
        return {
        }
    },
    components: {
        "NavBar": NavBar,
        "NavFooter": NavFooter,
        "ModalHelp": ModalHelp,
    },
    updated() {
        this.$store.commit('changeActiveMenuLink', this.$router.currentRoute.name)
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
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>