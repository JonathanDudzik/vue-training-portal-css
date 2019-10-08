<template>
    <div class="level-item">
        <BtnPlayPause :is="dynamicComponent" @click="togglePlayMedia"/>
    </div>
</template>

<script>
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';

export default {
    components: {
        Play,
        Pause   
    },
    computed: {
        dynamicComponent() {
            if(this.$store.state.playMedia == false) {
                return "Pause"
            } else {
                return "Play"
            }
        }
    },
    methods: {
        togglePlayMedia() {
            this.$store.commit('changePlayMedia', !this.$store.state.playMedia)
        }
    }
}
</script>