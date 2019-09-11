<template>
  <div class="section">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="e.g Alex Smith">
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
      </div>
    </div>
    <div class="control">
      <button class="button is-primary" @click="toggleMenuState">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
      toggleMenuState() {
          if(this.$router.currentRoute.path == "/menu") {
              this.$router.push('/course')
          }else {
              this.$router.push('/menu')
          }
      }
  }
}
</script>