<template>
  <div>
    <div>
        <div class="option-block">
            <svg class="option-icon">
                <use xlink:href="../../../public/sprite.svg#icon-add-to-list"></use>
            </svg>
            <p>Medium</p>
        </div>
    </div>

    <div>
        <div class="option-block">
            <svg class="option-icon">
                <use xlink:href="../../../public/sprite.svg#icon-clock"></use>
            </svg>
            <p>1.0x</p>
        </div>
    </div>

    <div>
        <div class="option-block">
            <svg class="option-icon">
                <use xlink:href="../../../public/sprite.svg#icon-controller-fast-forward"></use>
            </svg>
            <p>Auto/Manual</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

.option-block {
    padding: 2rem;
    margin-top: 3rem;
}
.option-icon {
    height: 2rem;
    width: 2rem;
}

</style>