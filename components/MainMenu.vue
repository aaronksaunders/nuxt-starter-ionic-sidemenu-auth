<template>
  <ion-menu side="start" content-id="main-content" v-if="auth">
    <ion-header>
      <ion-toolbar color="danger">
        <ion-title>My App</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-menu-toggle>
          <ion-menu-toggle>
            <ion-item
              router-direction="root"
              router-link="/"
              :style="{
                '--background': isActive('/home') && 'lightgrey',
              }"
            >
              Home Page
            </ion-item>
          </ion-menu-toggle>
          <ion-item
            router-direction="root"
            router-link="/settings"
            :style="{
              '--background': isActive('/settings') && 'lightgrey',
            }"
          >
            Settings Page
          </ion-item>
          <ion-item
            router-direction="root"
            router-link="/profile"
            :style="{
              '--background': isActive('/profile') && 'lightgrey',
            }"
          >
            Profile Page
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
    <ion-footer>
      <ion-row class="ion-justify-content-center">
        <ion-button @click="doLogout">LOGOUT</ion-button>
      </ion-row>
    </ion-footer>
  </ion-menu>
</template>
<script setup lang="ts">
import { alertController } from "@ionic/vue";

const nuxtApp = useNuxtApp();

const auth = useAuth();
const router = useRouter();

/**
 * determine if menu is active
 * @param path
 */
const isActive = (path: string) => {
  const pathAlias = nuxtApp.$router?.currentRoute;
  return pathAlias?.value?.meta?.alias?.includes(path);
};

/**
 * perform logout action
 */
const doLogout = async () => {
  const alert = await alertController.create({
    header: "Alert",
    subHeader: "Important message",
    message: "This is the logout action",
    buttons: ["OK"],
  });

  // close menu
  await menuController.close();

  // perform action
  auth.value = null;

  router.replace("/login");
};
</script>

<style scoped>
.active {
  color: green;
}
</style>
