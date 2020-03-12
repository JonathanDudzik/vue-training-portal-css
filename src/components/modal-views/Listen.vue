<template>
    <div>
      <p>Listen</p>
      <div @click="mediumSelector(['MainMenu'])">
        clickME
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
