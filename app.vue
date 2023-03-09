<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <main-menu />
      <ion-router-outlet id="main-content" />
    </ion-split-pane>
  </ion-app>
</template>
<script setup>
// to load the ionic pwa elements
useHead({
  script: [
    {
      async: true,
      crossorigin: "anonymous",
      type: "module",
      src:
        "https://unpkg.com/@ionic/pwa-elements@latest/dist/ionicpwaelements/ionicpwaelements.esm.js",
    },
  ],
});

</script>
