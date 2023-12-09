<template>
  <div class="layout-container">
    <AppHeader />
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