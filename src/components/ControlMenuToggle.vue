<template>
    <div class="my-menu-toggler">
        <span 
            ref="MenuToggler"
            class="is-size-1"
            @click="openMenu"
        >
            &#9776;
        </span>
    </div>
</template>

<script>
export default {
    methods: {
        openMenu () {
            this.$store.state.mainMenuOpen = !this.$store.state.mainMenuOpen;
            console.log(this.$store.state.mainMenuOpen);
        }
    }
}
</script>

<style lang="scss" scoped>
    .my-menu-toggler {
            z-index: 9000;
        }
</style>