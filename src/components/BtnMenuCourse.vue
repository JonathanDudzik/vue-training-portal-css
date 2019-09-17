<template>
    <div>
        <Menu class='is-size-1 has-text-white' @click="toggleMenuState"/>
    </div>
</template>

<script>
import Menu from 'vue-material-design-icons/Menu.vue';

export default {
    components: {
        Menu    
    },
    methods: {
        toggleMenuState() {
            if(this.$router.currentRoute.path == "/menu") {
                this.$router.push('/course')
            }else {
                this.$router.push('/menu')
            }
        }
    }
}
</script>