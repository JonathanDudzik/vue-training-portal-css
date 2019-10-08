<template>
    <div class="level-item">
        <BtnResetReplay @click="resetReplay"/>
    </div>
</template>

<script>
import BtnResetReplay from "../../node_modules/vue-material-design-icons/Repeat.vue"

export default {
    components: {
        BtnResetReplay 
    },
    methods: {
        resetReplay() {
            this.$store.commit('changeGenericEventCounter', this.$store.state.genericEventCounter += 1)
        }
    }
}
</script>