<script setup lang="ts">
const appConfig = useAppConfig();
const {
  public: { variables },
} = useRuntimeConfig();
</script>

<template>
  <div class="footer">
    <div class="copyright">
      <p>&copy; 2023 {{ variables.appName }}. All rights reserved.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/main";

.footer {
  background-color: $primary;
  padding: 20px;
  text-align: center;
  color: $textBright;
  bottom: 0;
  position: relative;
  width: 100vw;
}
</style>
