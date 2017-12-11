<template>
  <nav class="navbar"
   role="navigation"
   aria-label="main navigation">
  <div class="navbar-end">
    <router-link v-if="!$store.state.isUserLoggedIn" class="navbar-item" to="/">
      Home
    </router-link>
    <router-link v-if="!$store.state.isUserLoggedIn" class="navbar-item" to="/login">
      Login
    </router-link>
    <router-link v-if="!$store.state.isUserLoggedIn" class="navbar-item" to="/register">
      Sign Up
    </router-link>
    <a v-if="$store.state.isUserLoggedIn" v-on:click="logout" class="navbar-item">
      Logout
    </a>

    <button class="button navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.navbar
{
  background-color: #3b7ecc;
}

.navbar-item
{
  color: white;
}

</style>
