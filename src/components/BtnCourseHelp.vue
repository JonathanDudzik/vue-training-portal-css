<template>
    <div>
        <Help @click="toggleHelpModal"/>
    </div>
</template>

<script>
import Help from 'vue-material-design-icons/Help.vue';

export default {
    components: {
        Help    
    },
    methods: {
        toggleHelpModal() {
            this.$store.commit('changeShowHelpModal', !this.$store.state.showHelpModal)
        }
    }
}
</script>