<script setup></script>
<template>
  <div class="layout-container">
    <AppHeader />
    <div class="content">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
}
</style>
