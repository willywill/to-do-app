<template>
  <nav class="navbar"
   role="navigation"
   aria-label="main navigation">
  <div class="navbar-end">
    <router-link class="navbar-item" to="/">
      Home
    </router-link>
    <router-link class="navbar-item" to="/login">
      Login
    </router-link>
    <router-link class="navbar-item" to="/register">
      Sign Up
    </router-link>

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
