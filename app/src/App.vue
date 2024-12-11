<template>
  <v-app id="inspire">
    <v-app-bar
      class="px-3"
      density="compact"
      flat
    >
    <v-img src="../src/assets/images/logo.png" style="width:350px;height:54px;"></v-img> 
      <v-spacer></v-spacer>

      <v-tabs
        v-model="currentTab"
        color="grey-darken-2"
        centered
      >
        <v-tab
          v-for="link in links"
          :key="link.text"
          :to="link.route"
          router
        >
          {{ link.text }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey-darken-1"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      
      <router-view></router-view> <!-- Dynamically renders the current route -->
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Define the navigation links with corresponding routes
const links = [
  { text: "Home", route: "/" },
  { text: "Report", route: "/report" },
  
];

// v-tabs selected model
const currentTab = ref(0);
</script>

<style scoped>
/* Add custom styles if necessary */
</style>
