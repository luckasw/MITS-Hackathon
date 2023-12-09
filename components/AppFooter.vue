<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
  <div class="footer">
    <p>Footer</p>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/main";

.footer {
  // background-color: $secondary;
  padding: 20px;
  text-align: center;
  bottom: 0;
  position: absolute;
  width: 100vw;
}
</style>
