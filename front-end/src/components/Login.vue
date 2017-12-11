<template>
  <div>
    <h1 class="title">Login</h1>
    <hr>
    <div class="container">
      <b-notification
      v-if="error != null"
      v-html="error"
      type="is-primary"
      has-icon>
      </b-notification>
      <br>
    </div>
    <div class="field">
      <b-input
      type="name"
      name="name"
      v-model="userName"
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
    v-on:click="login"
    class="button is-primary">Login</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          userName: this.userName,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

.title
{
  margin-top: 50px;
}

</style>
