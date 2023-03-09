export default defineNuxtConfig({
  modules: ["@nuxtjs/ionic"],
  ssr : process.env.BUILD_MOBILE === "true" ? false : true,
  appConfig : {
    API_SERVER_URL :process.env.BUILD_MOBILE === "true" ? process.env.SERVER_URL : "/",
  },
  ionic: {
    integrations: {
      pwa: false,
    },
    css: {
      basic: true,
      core: true,
      utilities: true,
    },
  }
});


