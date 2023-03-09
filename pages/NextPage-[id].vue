<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button />
        </ion-buttons>
        <ion-title>Next Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Next Page</h1>
      <p>{{ $route.params.id }}</p>
      <div>
        API CALL
        <div>
          <p>{{ data }}</p>
          <button @click="getData">CLICK</button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>
definePageMeta({
  alias: ["/next/:id"],
  middleware: ["auth"],
});

const data = ref();
const appConfig = useAppConfig()

const getData = async () => {
  const { data: response } = await useFetch(`${appConfig.API_SERVER_URL}api/count`);
  console.log(data.value);
  data.value = response;
};
</script>
