<template>
    <div>
        <span 
            class="is-size-1"
            @click="toggleMenuState"
        >
            &#9776;
        </span>
    </div>
</template>

<script>
export default {
    methods: {
        toggleMenuState() {
            this.$store.commit('toggleMenu');
        }
    }
}
</script>

<style lang="scss" scoped>
</style>