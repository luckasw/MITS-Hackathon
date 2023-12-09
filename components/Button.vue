<script setup>
defineProps(["buttonText", "buttonTextColor"]);
</script>

<template>
  <button class="button">
    {{ buttonText }}
  </button>
</template>

<style lang="scss" scoped>
@import "~/assets/main";

.button {
  padding: 20px;
  cursor: pointer;
  color: $textBright;
  background-color: $primary;
  width: 50vw;
  max-width: 250px;
  border-radius: 5px;
  font-size: 1.25rem;
}
</style>
