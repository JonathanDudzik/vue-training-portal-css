<template>
    <div class="test-class">
        <p>State Information</p>
        <p>I should span the length of implicit rows!</p>
        <p>The info contained here should be fixed and stay in sight on scroll down.</p>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
    
    .test-class {
        background-color: lightcoral;
        /* height: 100%; */
     
        /* grid item styles */
        align-self: stretch;
        grid-row: 2 / -1;
        grid-column: 2 / -1;

    }

</style>