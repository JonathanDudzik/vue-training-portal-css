<template>
    <div>
        <button
            class="my-menu-toggle button is-size-3"
            @click="toggleMenuState"
        >
            &#9776;
        </button>
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