<template>
  <div class="section">

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model="email">
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="password" v-model="password">
      </div>
    </div>

    <div class="field">
      <label class="label">CACFP Agreement Number</label>
      <div class="control">
        <input class="input" type="text" v-model="agreementNumber">
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
import db from '@/services/FirebaseInit'
import firebase from 'firebase'

export default {
  data() {
    return {
      email: null,
      password: null,
      agreementNumber: null,
      feedback: null,
    }
  },
  methods: {
    signup() {
      const ref = db.collection('users').doc(this.email)
      if(this.agreementNumber && this.email && this.password) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          console.log(cred)
          ref.set({
            agreementNumber: this.agreementNumber,
            user_id: cred.user.uid
          })
        }).then(() => {
          this.$router.push({ name: 'Course' })
        })
        .catch(error => {
          console.log(error)
          this.feedback = error.message
        })
        this.feedback = ""
      } else {
        this.feedback = "You must complete all fields"
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