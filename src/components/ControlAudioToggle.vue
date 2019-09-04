<template>
    <div class="my-menu-toggler">
        <span 
            ref="AudioToggler"
            class="is-size-1"
            @click="controlMenu"
        >
            &#9738;
        </span>
    </div>
</template>

<script>
export default {
    methods: {
        controlMenu: function(e) {
            const { AudioToggler } = this.$refs
            console.log(this.$refs)
            TweenMax.to(AudioToggler, 2, {color: "red"})
        }
    }
}
</script>

<style lang="scss" scoped>
    .my-menu-toggler {
            padding-right: 20px;
            z-index: 9000;
        }
</style>