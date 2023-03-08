<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Home</ion-title>
        <ion-buttons slot="end"> </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h1>Home Page</h1>
      <p>This is the Home Page</p>
      <ion-button color="danger" @click="ionRouter.push('/next/100')">
        Next Page
      </ion-button>

      <ion-button @click="doShowActions"> Action Sheet JS </ion-button>
      <!-- <ion-button @click="showActionsCap"> Action Sheet Native </ion-button> -->
      <pre>{{ JSON.stringify(result, null, 2) }}</pre>
    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>
import { actionSheetController } from "@ionic/vue";
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';
definePageMeta({
  alias: ["/", "/home"],
  middleware: ["auth"],
});
const ionRouter = useIonRouter();
const result = ref();

const showActionsCap = async () => {
  const result = await ActionSheet.showActions({
    title: 'Photo Options',
    message: 'Select an option to perform',
    options: [
      {
        title: 'Upload',
      },
      {
        title: 'Share',
      },
      {
        title: 'Remove',
        style: ActionSheetButtonStyle.Destructive,
      },
    ],
  });

  console.log('Action Sheet result:', result);
};

const doShowActions = () => {
  showActions().then(
    () => {

    },
    (error) => console.log(error)
  );
};

const showActions = async () => {
  console.log("in action sheet controller");
  const actionSheet = await actionSheetController.create({
    header: "Example header",
    subHeader: "Example subheader",
    buttons: [
      {
        text: "Delete",
        role: "destructive",
        data: {
          action: "delete",
        },
      },
      {
        text: "Share",
        data: {
          action: "share",
        },
      },
      {
        text: "Cancel",
        role: "cancel",
        data: {
          action: "cancel",
        },
      },
    ],
  });

  console.log("actionSheet", actionSheet);

  await actionSheet.present();

  console.log("actionSheet presented", actionSheet);

  const res = await actionSheet.onDidDismiss();
  result.value = res;
};
</script>
