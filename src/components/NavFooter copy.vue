<template>
    <div class="container">
    <nav class="level is-mobile">
        <!-- if previousRouteName is ommited, there is no previous route to show -->
        <!-- you still want the div with class level left -->
        <div class="level-left">
          <div v-if="previousRouteName">
            <div class="level-item is-size-4" v-on:click="navPrevious">
                {{ previousRouteName }}
            </div>
          </div>
        </div>
        <!-- if nextRouteName is ommited, there is no next route to show -->
        <div class="level-right">
          <div v-if="nextRouteName">
            <div class="level-item is-size-4" v-on:click="navNext">
              {{ nextRouteName }}
            </div>
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
    navPrevious() {
      this.$router.push(this.previousRoute)
    },
    navNext: function() {
      this.$router.push(this.nextRoute)
    } 
  } 
}
</script>

<style lang="scss" scoped>
  // .my-nav-bar {
  //   width: 40%;
  //   margin: 0 auto;
  //   margin-bottom: 40px;
  //   border-radius: 100px;
  //   box-shadow: 0 -2px 3px rgba(black, 0.1), 0 0 0 1px rgba(black, 0.1);
  //   padding: 10px 30px 10px 30px;
  // }
</style>