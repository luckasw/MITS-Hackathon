// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  modules: ["@nuxtjs/supabase"],
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/index",
      exclude: [],
    },
  },
  router: {
    middleware: "redirect",
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss"],
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      variables: {
        appName: "Gringo",
      },
    },
  },
});
