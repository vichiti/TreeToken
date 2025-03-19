<!-- src/App.vue -->
<template>
  <v-app>
    <!-- Navigation Menu -->
    <nav-menu />

    <!-- Main Content -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavMenu from './components/NavMenu.vue';

export default {
  name: 'App',
  components: {
    NavMenu,
  },
};
</script>

<style>
/* Optional global styles */
</style>