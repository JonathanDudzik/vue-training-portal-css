<template>
    <div class="container">
    <nav class="my-nav-bar level is-mobile has-background-light">
        <!-- left side -->
        <div class="level-left">
            <div class="level-item is-size-4" v-on:click="previous">
                {{ previousRouteName }}
            </div>
        </div>
        <!-- centered items? -->
        <div class="level-item">
        </div>
        <!-- right side -->
        <div class="level-right">
            <div class="level-item is-size-4" v-on:click="next">
                {{ nextRouteName }}
            </div>
        </div>
    </nav>
    </div>
</template>

<script>
export default {
  props: {
    nextRouteName: String,
    previousRouteName: String,
    nextRoute: String,
    previousRoute: String
  },
  methods: {
    previous() {
      this.$router.push(this.nextRoute);
    },
    next: function() {
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