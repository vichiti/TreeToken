// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from '../views/HomeScreen.vue';
import TokenMaker from '../views/TokenMaker.vue';
import TokenStore from '../views/TokenStore.vue';
import LockBox from '../views/LockBox.vue';
import Scoreboard from '../views/Scoreboard.vue';
import WalletDashboard from '../views/WalletDashboard.vue';
import HelpCorner from '../views/HelpCorner.vue';

const routes = [
  { path: '/', component: HomeScreen },
  { path: '/make-tokens', component: TokenMaker },
  { path: '/buy-tokens', component: TokenStore },
  { path: '/lock-tokens', component: LockBox },
  { path: '/scoreboard', component: Scoreboard },
  { path: '/wallet', component: WalletDashboard },
  { path: '/help', component: HelpCorner },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;