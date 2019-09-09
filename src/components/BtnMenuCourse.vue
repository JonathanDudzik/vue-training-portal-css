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
            if(this.$router.currentRoute.path == "/menu") {
                this.$router.push('/course')
            }else {
                this.$router.push('/menu')
            }
        }
    }
}
</script>