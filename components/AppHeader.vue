<script setup lang="ts">
import { defineProps } from "vue";

const appConfig = useAppConfig();
const {
  public: { variables },
} = useRuntimeConfig();

const isMobile = ref(false);
const toggleDropdown = () => {
  isMobile.value = !isMobile.value;
};
</script>

<template>
  <div class="header">
    <h1>{{ variables.appName }}</h1>
    <!-- Dropdown for mobile view -->
    <div class="mobile-nav" v-if="isMobile">
      <h1>{{ variables.appName }}</h1>
      <div class="dropdown-content">
        <NuxtLink class="mobilelink" to="/" @click="toggleDropdown"
          >Esileht</NuxtLink
        >
        <NuxtLink class="mobilelink" to="/profile" @click="toggleDropdown"
          >Profiil</NuxtLink
        >
        <NuxtLink class="mobilelink" to="/login" @click="toggleDropdown"
          >Log sisse</NuxtLink
        >
        <NuxtLink class="mobilelink" to="/register" @click="toggleDropdown"
          >Registreeri</NuxtLink
        >
      </div>
    </div>
    <div class="hamburger-icon" @click="toggleDropdown">
      <span v-if="!isMobile"></span>
      <span v-if="!isMobile"></span>
      <span v-if="!isMobile"></span>
      <span v-if="isMobile" class="x-icon-line1"></span>
      <span v-if="isMobile" class="x-icon-line2"></span>
    </div>
    <!-- Navigation for desktop view -->
    <nav class="desktop-nav">
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
  text-align: center;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  z-index: 1;

  .desktop-nav {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    width: 100%;

    .link {
      color: $textBright;
      text-decoration: none;
      flex: 1;
      padding: 2vw;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      font-size: 1.5rem;
    }
  }

  .mobile-nav {
    display: none;
    position: absolute;
    top: 0;
    background-color: $primary;
    width: 100vw;
    height: 100vh;

    h1 {
      padding: 30px;
    }

    .dropdown-content {
      display: flex;
      flex-direction: column;

      .mobilelink {
        height: 10vh;
        text-decoration: none;
        font-size: 1.75rem;
        color: $textBright;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .hamburger-icon {
    display: none;
    flex-direction: column;
    width: 50px;
    height: 50px;
    right: 20px;
    justify-content: center;
    align-items: center;
    position: absolute;

    span {
      background-color: $textBright;
      height: 2px;
      width: 25px;
      margin: 5px 0;
      display: block;
    }

    .x-icon-line1,
    .x-icon-line2 {
      position: absolute;
    }

    .x-icon-line1 {
      transform: rotate(-45deg);
      width: 30px;
    }

    .x-icon-line2 {
      transform: rotate(45deg);
      width: 30px;
    }
  }

  @media (max-width: 600px) {
    .mobile-nav {
      display: block;
    }

    .desktop-nav {
      display: none;
    }

    .hamburger-icon {
      display: flex;
    }
  }
}

@media (min-width: 600px) {
  .header {
    padding-bottom: 0;
  }
}
</style>
