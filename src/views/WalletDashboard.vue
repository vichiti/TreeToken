<!-- src/views/WalletDashboard.vue -->
<template>
  <v-container>
    <h2>My Wallet</h2>
    <v-card>
      <v-card-text>
        <p>Tree Tokens: {{ tokenBalance }} TTs</p>
        <p>HBAR: {{ hbarBalance }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn v-if="!walletConnected" color="primary" @click="connectWallet">Connect Wallet</v-btn>
      </v-card-actions>
    </v-card>
    <v-list>
      <v-list-item v-for="tx in transactions" :key="tx.id">{{ tx.text }}</v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'WalletDashboard',
  setup() {
    const tokenBalance = ref(30);
    const hbarBalance = ref(50);
    const walletConnected = ref(false);
    const transactions = ref([
      { id: 1, text: 'Bought 10 TTs on March 17' },
      { id: 2, text: 'Locked 5 TTs on March 18' },
    ]);

    const connectWallet = () => {
      walletConnected.value = true;
      alert('Wallet connected!');
    };

    return { tokenBalance, hbarBalance, walletConnected, transactions, connectWallet };
  },
};
</script>