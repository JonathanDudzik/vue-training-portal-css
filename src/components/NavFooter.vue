<template>
    <div class="container">
    <nav class="my-nav-bar level is-mobile has-background-light">
        <!-- left side -->
        <div class="level-left">
            <div class="level-item is-size-1">
                {{ previousRouteName }}
            </div>
        </div>
        <!-- centered items? -->
        <div class="level-item">
        </div>
        <!-- right side -->
        <div class="level-right" @click="nextRoute">
            <div class="level-item is-size-1">
                {{ nextRouteName }}
            </div>
        </div>
    </nav>
    </div>
</template>

<script>
export default {
  props: [
    "nextRoute",
    "nextRouteName",
    "PreviousRoute",
    "PreviousRouteName",
  ],
  methods: {
    nextRoute() {
      this.$router.push(this.nextRoute);
    },
    previousRoute() {
      this.$router.push(this.previousRoute);
    } 
  } 
}
</script>

<style lang="scss" scoped>
  .my-nav-bar {
    width: 40%;
    margin: 0 auto;
    margin-bottom: 40px;
    border-radius: 100px;
    box-shadow: 0 -2px 3px rgba(black, 0.1), 0 0 0 1px rgba(black, 0.1);
    padding: 10px 30px 10px 30px;
  }
</style>