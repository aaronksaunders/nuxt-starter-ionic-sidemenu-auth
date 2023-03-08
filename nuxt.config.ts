export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxtjs/ionic"],
  ionic: {
    integrations: {
      pwa: false,
    },
    css: {
      basic: true,
      core: true,
      utilities: true,
    },
  },
});
