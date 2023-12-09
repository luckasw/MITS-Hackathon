<script setup lang="ts">
const appConfig = useAppConfig();
definePageMeta({
  middleware: ["redirect"]
})
</script>

<template>
  <div class="main">
    <Button buttonText="Skänneeri" buttonTextColor="white" />
    <History />
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/main";

.main {
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5vh;
}
</style>
