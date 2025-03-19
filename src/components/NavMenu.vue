<!-- src/components/NavMenu.vue -->
<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Tree Token Shop</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/" text>Home</v-btn>
    <v-btn to="/make-tokens" text>Make Tokens</v-btn>
    <v-btn to="/buy-tokens" text>Buy Tokens</v-btn>
    <v-btn to="/lock-tokens" text>Lock Tokens</v-btn>
    <v-btn to="/scoreboard" text>Scoreboard</v-btn>
    <v-btn to="/help" text>Help</v-btn>
    <v-btn to="/wallet" icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavMenu',
};
</script>