// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase'],
  supabase:{
    redirectOptions: {
      login: '/dashboard',
      callback: '/index',
      exclude: ['/register', '/login'],
    }
  },

  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss"],
  devtools: { enabled: true },
});
