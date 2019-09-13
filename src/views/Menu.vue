<template>
  <div class="section">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="e.g Alex Smith" v-model="name">
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model="email">
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="text" v-model="password">
      </div>
    </div>

    <div class="field">
      <label class="label">Agreement Number</label>
      <div class="control">
        <input class="input" type="text" v-model="alias">
      </div>
    </div>
    <p v-if="feedback">{{ feedback }}</p>
    <div class="control">
      <button class="button is-primary" @click="signup">Submit</button>
      <button class="button is-primary" @click="toggleMenuState">Go to course</button>
    </div>
  </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/services/FirebaseInit'

export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null
    }
  },
  methods: {
    signup() {
      if(this.alias) {
        this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true 
        })
        let ref = db.collection('users').doc(this.slug)
        ref.get().then(doc => {
          if(doc.exists) {
            this.feedback = "this number is not valid"
          } else {
            this.feedback = 'that is a valid agreement number!'
          }
        })
        console.log(this.slug)
      } else {
        this.feedback = "You must enter an NC CACFP Agreement Number"
      }
    },
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

<style lang="scss" scoped>

</style>