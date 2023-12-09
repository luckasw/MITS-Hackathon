<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
  <div class="dashboard-main">
    <Button buttonText="Skanneeri"/>
    <History />
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/main";

.dashboard-main {
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5vh;
}
</style>
