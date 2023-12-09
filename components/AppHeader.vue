<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
  <div class="header">
    <h1>Gringo</h1>
    <nav>
      <NuxtLink to="/">Esileht</NuxtLink>
      <NuxtLink to="/about">Profiil</NuxtLink>
      <NuxtLink to="/login">Log in</NuxtLink>
      <NuxtLink to="/register">Register</NuxtLink>
    </nav>
  </div>
</template>

<style scoped>
.header {
  background-color: #0079ff;
  padding: 2rem;
  text-align: center;
}
nav {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}
</style>
