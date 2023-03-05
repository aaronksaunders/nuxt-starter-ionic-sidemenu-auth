<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Profile Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>{{ JSON.stringify(auth, null, 2) }}</p>
    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>
definePageMeta({
  alias: ["/profile"],
  middleware: ["auth"],
});

const auth = useAuth();
</script>
