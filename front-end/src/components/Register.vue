<template>
  <div>
    <h1 class="title">Register</h1>
    <hr>
    <div class="field">
      <b-input
      type="name"
      name="name"
      v-model="user"
      placeholder="Enter a username..."
      style="max-width: 400px; margin: auto;"/>
    </div>
    <br>
    <div class="field">
      <b-input
      type="password"
      name="password"
      v-model="password"
      placeholder="Enter a password..."
      style="max-width: 400px; margin: auto;"/>
    </div>
    <br>
    <button
    v-on:click="register"
    class="button is-primary">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'register',
  data () {
    return {
      user: '',
      password: ''
    }
  },

  methods: {
    async register () {
      const response = await AuthenticationService.register({
        user: this.user,
        password: this.password
      })

      console.log(response.data)
    }
  }
}
</script>

<style scoped>
</style>
