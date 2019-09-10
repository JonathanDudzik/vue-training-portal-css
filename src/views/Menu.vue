<template>
  <div class="section">
    <div class="field">
      <label class="label">{{posts.status}}</label>
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
import axios from 'axios'

export default {

  data() {
    return {
      posts: []
    }
  },

  created(){
    // this preforms a GET request
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        console.log(response)
        this.posts = response
      }).catch(error => {
        console.log(error)
        alert("sorry bro")
      })
  },
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