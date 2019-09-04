<template>
    <div class="my-menu-toggler">
        <span 
            ref="MenuToggler"
            class="is-size-1"
            @click="controlMenu"
        >
            &#9776;
        </span>
    </div>
</template>

<script>
export default {
    methods: {
        controlMenu: function(e) {
            const { MenuToggler } = this.$refs
            console.log(this.$refs)
        }
    }
}
</script>

<style lang="scss" scoped>
    .my-menu-toggler {
            z-index: 9000;
        }
</style>