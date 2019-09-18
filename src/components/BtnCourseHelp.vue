<template>
    <div>
        <Help @click="returnToCurrentRoute"/>
    </div>
</template>

<script>
import Help from 'vue-material-design-icons/Help.vue';

export default {
    components: {
        Help    
    },
    methods: {
      returnToCurrentRoute() {
          this.$router.push({ name: 'Course Help', append: true })
      }
    }
}
</script>