<script setup lang="ts">

definePageMeta({
  alias: ["/login"],
});

const auth = useAuth();

const router = useIonRouter();
const username = ref<string>("");
const password = ref<string>("");


watch(auth, () => {
  if (auth.value) router.replace("/home");
});

/**
 *
 */
const onLogin = async () => {
  try {

    auth.value = { user : username.value, id : '100'+username.value}

    return router.push("/home");
  } catch (e) {
    console.log(e);

  }
};
</script>
<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <!-- <ion-buttons slot="start"> <ion-back-button /></ion-buttons> -->
        <ion-title> Nuxt Ionic: Login </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <h2>Login Page</h2>
      <ion-list>
        <ion-item>
          <ion-label position="stacked" color="primary">Username</ion-label>
          <ion-input
            v-model="username"
            name="username"
            type="text"
            :spellcheck="false"
            autocapitalize="off"
            required
          ></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked" color="primary">Password</ion-label>
          <ion-input
            v-model="password"
            name="password"
            type="password"
            required
          ></ion-input>
        </ion-item>
      </ion-list>

      <ion-row responsive-sm>
        <ion-col>
          <ion-button @click="onLogin()" type="button" expand="block">LOGIN</ion-button>
        </ion-col>
        <ion-col>
          <!-- <ion-button @click="router.push('/signup')" color="light" expand="block"
            >SIGN UP</ion-button
          > -->
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>
