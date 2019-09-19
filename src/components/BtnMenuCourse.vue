<template>
    <div>
        <Menu @click="toggleMenuState"/>
    </div>
</template>

<script>
import Menu from 'vue-material-design-icons/ViewHeadline.vue';

export default {
    components: {
        Menu    
    },
    methods: {
        toggleMenuState() {
            if(this.$router.currentRoute.path == "/menu") {
                this.$router.push('/course/' + this.$store.state.activeMenuLink)
            } else {
                this.$router.push('/menu')
            }
        }
    }
}
</script>

methods: {
    toggleMenuState() {
        if(this.$router.currentRoute.path == "/menu") {
          console.log(this.$store.state.activeMenuLink)
            this.$router.push(this.$store.state.activeMenuLink)
        }else {
            this.$router.push('/menu')
        }
    }
  }