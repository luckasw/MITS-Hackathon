<script setup>
defineProps(["buttonText", "buttonTextColor"]);
</script>

<template>
  <button :style="{ color: buttonTextColor }" class="button">
    {{ buttonText }}
  </button>
</template>

<style lang="scss" scoped>
@import "~/assets/main";

.button {
  padding: 20px;
  cursor: pointer;
  color: $text;
  background-color: $primary;
  width: 50vw;
  max-width: 250px;
  border-radius: 5px;
  font-size: 1.25rem;
}
</style>
