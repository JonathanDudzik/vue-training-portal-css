<template>
  <div>
      <slot>
      </slot>
  </div>
</template>

<script>
export default {
    props: {
        'name': String
    },
    mounted() {
        console.log(`I am the "${this.name}" button!`)
    }
}
</script>

<style lang="stylus" scoped>

</style>