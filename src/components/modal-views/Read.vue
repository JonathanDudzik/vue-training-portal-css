<template>
    <div>
      <p>Read</p>
      <div @click="mediumSelector(['MainMenu'])">
        CLick ME!
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    mediumSelector(componentList) {
      this.$store.state.viewComponentList = componentList
    }
  }
}
</script>