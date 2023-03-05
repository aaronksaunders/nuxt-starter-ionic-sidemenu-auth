<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Home</ion-title>
        <ion-buttons slot="end">

        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h1>Home Page</h1>
      <p>This is the Home Page</p>
      <ion-button color="danger" @click="ionRouter.push('/next/100')">
        Next Page
      </ion-button>
      {{ JSON.stringify(data) }}
    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>


definePageMeta({
  alias: ["/", "/home"],
  middleware: ["auth"],
});
const ionRouter = useIonRouter();


</script>
