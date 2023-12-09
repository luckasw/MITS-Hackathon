<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="header">
    <h1>Gringo</h1>
    <div class="navbar">
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/login">Login</NuxtLink>
        <NuxtLink to="/register">Register</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: #0079ff;
  padding: 20px;
  text-align: center;
}
.navbar {
  padding: 20px;
}
</style>