<template>
  <div class="state-grid-item">
    <div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.state-grid-item {
  background-color: var(--color-primary-light);
  box-shadow: var(--level-1);
  padding: 1rem;
  
  /* grid item styles */
  align-self: stretch;
  grid-row: 2 / span 2;
  grid-column: span 1 / -1;
}
</style>