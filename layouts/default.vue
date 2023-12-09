<script setup>
const isMobile = false;
</script>
<template>
  <div class="layout-container">
    <AppHeader :isMobile="isMobile" />
    <slot />
    <AppFooter />
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
