<template>
    <div class="section">
        <div class="container">
            <div class="notification is-size-3">
                <p>The <em>HTTP 404 Not Found</em> or <em>Page Not Found</em> error 
                message is a Hypertext Transfer Protocol (HTTP) standard response code, in 
                computer network communications, to indicate that the browser was able to 
                communicate with a given server, but the server could not find what was requested.</p>
                <br><p>In other words... broken.</p>
            </div>
            <button class="button" @click="goToMenu">Return to main menu</button>
            <button class="button" @click="goToPrevious">Return to previous page</button>
        </div>
    </div>
</template>

<script>
import Home from 'vue-material-design-icons/Home.vue';
import { METHODS } from 'http';

export default {
  components: {
    Home
  },
  methods: {
      goToMenu() {
          this.$router.push('/menu')
      },
      goToPrevious() {
        this.$router.go(-1) // Same as "history.back()""
      }
    }
}
</script>

<style lang="scss">

</style>