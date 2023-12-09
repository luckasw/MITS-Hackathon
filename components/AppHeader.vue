<script setup lang="ts">
import { defineProps } from "vue";

const { isMobile } = defineProps(["isMobile"]);
const appConfig = useAppConfig();
const {
  public: { variables },
} = useRuntimeConfig();
console.log(isMobile);
</script>

<template>
  <div class="header">
    <h1>{{ variables.appName }}</h1>
    <!-- Dropdown for mobile view -->
    <div class="mobile-dropdown" v-if="isMobile">
      <NuxtLink class="link" to="/">Esileht</NuxtLink>
      <NuxtLink class="link" to="/profile">Profiil</NuxtLink>
      <NuxtLink class="link" to="/login">Log sisse</NuxtLink>
      <NuxtLink class="link" to="/register">Registreeri</NuxtLink>
    </div>
    <!-- Navigation for desktop view -->
    <nav v-if="!isMobile">
      <NuxtLink class="link" to="/">Esileht</NuxtLink>
      <NuxtLink class="link" to="/profile">Profiil</NuxtLink>
      <NuxtLink class="link" to="/login">Log sisse</NuxtLink>
      <NuxtLink class="link" to="/register">Registreeri</NuxtLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/main";

.header {
  background-color: $primary;
  color: $textBright;
  padding-top: 30px;
  text-align: center;

  nav {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;

    .link {
      color: $textBright;
      text-decoration: none;
      flex: 1;
      padding: 3vw;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
    }
  }

  .mobile-dropdown {
    margin-top: 10px;

    .link {
      display: block;
      padding: 10px;
      color: $textBright;
      text-decoration: none;
    }
  }

  @media (max-width: 600px) {
    // nav {
    //   display: none;
    // }
  }
}
</style>
