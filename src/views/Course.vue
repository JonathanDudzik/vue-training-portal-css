<template>
  <div>
    <NavBar/>
    <NavMenu class="section margin"/>
    <component :is="selectedContent" class="section margin"></component>
    <NavFooter/>
  </div>
</template>

<script>

export default {
    beforeMount() {
        this.$options.components = this.$store.state.courseContents.componentObjects
    },
    computed: {
        selectedContent() {
            return this.$store.state.selectedContent;
        }
    }
}
</script>

<style lang="scss" scoped>
.margin {
    margin-top: 70px;
}

</style>