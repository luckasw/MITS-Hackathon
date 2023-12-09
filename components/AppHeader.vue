<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
  <div class="header">
    <h1>Gringo</h1>
    <nav>
      <NuxtLink class="link" to="/">Esileht</NuxtLink>
      <NuxtLink class="link" to="/about">Profiil</NuxtLink>
      <NuxtLink class="link" to="/login">Log in</NuxtLink>
      <NuxtLink class="link" to="/register">Register</NuxtLink>
    </nav>
  </div>
</template>

<style scoped>
.header {
  background-color: #155831;
  color: white;
  padding: 2rem;
  text-align: center;
}
nav {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;

  .link {
    color: white;
  }
}
</style>
