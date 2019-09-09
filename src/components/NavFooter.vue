<template>
    <div class="level-item is-size-4">
      <button class="button">Test: {{ nextContentIdentifier }}</button>
    </div>
</template>

<script>
export default {
  props: {
    nextContentIdentifier: String,
  },
}
</script>