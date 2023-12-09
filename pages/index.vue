<script setup lang="ts">
const appConfig = useAppConfig();
definePageMeta({
  middleware: ["redirect"]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped></style>
