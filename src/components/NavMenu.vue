<!-- src/components/NavMenu.vue -->
<template>
  <div>
    <!-- App Bar -->
    <v-app-bar app color="primary" dark>
      <!-- Hamburger Icon for Mobile -->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
      
      <!-- Title -->
      <v-toolbar-title>Tree Token Shop</v-toolbar-title>
      
      <!-- Spacer to push buttons right -->
      <v-spacer></v-spacer>
      
      <!-- Menu Buttons (Visible on md and up.) -->
      <v-btn to="/" text class="d-none d-md-flex">Home</v-btn>
      <v-btn to="/make-tokens" text class="d-none d-md-flex">Make Tokens</v-btn>
      <v-btn to="/buy-tokens" text class="d-none d-md-flex">Buy Tokens</v-btn>
      <v-btn to="/lock-tokens" text class="d-none d-md-flex">Lock Tokens</v-btn>
      <v-btn to="/scoreboard" text class="d-none d-md-flex">Scoreboard</v-btn>
      <v-btn to="/help" text class="d-none d-md-flex">Help</v-btn>
      
      <!-- Wallet Icon (Always visible) -->
      <v-btn to="/wallet" icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Navigation Drawer for Mobile -->
    <v-navigation-drawer v-model="drawer" temporary app class="d-md-none">
      <v-list dense>
        <v-list-item to="/" @click="drawer = false">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/make-tokens" @click="drawer = false">
          <v-list-item-title>Make Tokens</v-list-item-title>
        </v-list-item>
        <v-list-item to="/buy-tokens" @click="drawer = false">
          <v-list-item-title>Buy Tokens</v-list-item-title>
        </v-list-item>
        <v-list-item to="/lock-tokens" @click="drawer = false">
          <v-list-item-title>Lock Tokens</v-list-item-title>
        </v-list-item>
        <v-list-item to="/scoreboard" @click="drawer = false">
          <v-list-item-title>Scoreboard</v-list-item-title>
        </v-list-item>
        <v-list-item to="/help" @click="drawer = false">
          <v-list-item-title>Help</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'NavMenu',
  setup() {
    const drawer = ref(false); // Controls drawer visibility
    return { drawer };
  },
};
</script>

<style scoped>
/* Ensure no overflow on mobile */
.v-app-bar {
  overflow: hidden;
}
</style>