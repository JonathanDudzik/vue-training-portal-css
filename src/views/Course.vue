<template>
    <div>
        <NavBarTop/>
        <NavBarBottom/>
        <section class="section">
            <div class="columns">
                <div class="column is-10 is-offset-1  margin-content-top margin-content-bottom">
                    <ModalHelp v-if="this.$store.state.showHelpModal"/>
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div> 
        </section>
    </div>
</template>

<script>
import NavBarBottom from '@/components/NavBarBottom'
import NavBarTop from '@/components/NavBarTop'
import ModalHelp from '@/components/ModalHelp'

export default {
    components: {
        "NavBarBottom": NavBarBottom,
        "NavBarTop": NavBarTop,
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
        margin-top: 136px;
    }
    .margin-content-bottom {
        margin-bottom: 126px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>