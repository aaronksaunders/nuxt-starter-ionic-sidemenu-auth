export default defineNuxtConfig({
  ssr: true,
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
