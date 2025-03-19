<!-- src/components/NavMenu.vue -->
<template>
  <nav class="menu">
    <router-link to="/" class="menu-item">Home</router-link>
    <router-link to="/make-tokens" class="menu-item">Make Tokens</router-link>
    <router-link to="/buy-tokens" class="menu-item">Buy Tokens</router-link>
    <router-link to="/lock-tokens" class="menu-item">Lock Tokens</router-link>
    <router-link to="/scoreboard" class="menu-item">Scoreboard</router-link>
    <router-link to="/help" class="menu-item">Help</router-link>
    <router-link to="/wallet" class="menu-item wallet-icon">👤 My Wallet</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
};
</script>

<style scoped>
.menu {
  background-color: #4caf50; /* Green theme */
  padding: 10px;
  display: flex;
  justify-content: space-around;
}
.menu-item {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 5px 10px;
}
.menu-item:hover {
  background-color: #388e3c;
}
.wallet-icon {
  margin-left: auto; /* Push to right */
}
</style>