<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
  <div class="dashboard-main">
    <div class="dashboard-content">
      <NuxtLink to="/qr">
      <Button buttonText="Skanneeri" />
      </NuxtLink>
      <History />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/main";

.dashboard-main {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 40px;

  .dashboard-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
</style>
