<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Settings Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Settings Page</h1>
    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>
definePageMeta({
  alias: ['/settings'],
  middleware: ["auth"],
});
</script>
