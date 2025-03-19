<!-- src/views/LockBox.vue -->
<template>
  <v-container class="text-center">
    <h2>Lock Your Tokens!</h2>
    <p>You have {{ tokenBalance }} TTs</p>
    <v-slider v-model="lockAmount" :max="tokenBalance" label="Tokens to Lock" thumb-label="always"></v-slider>
    <p>Save {{ lockAmount }} CO2 Buckets!</p>
    <v-checkbox v-model="wantCertificate" label="Get a Certificate ($1)"></v-checkbox>
    <v-btn color="primary" @click="lockTokens">Lock My Tokens!</v-btn>
    <v-alert v-if="result" type="success" class="mt-4">{{ result }}</v-alert>
  </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'LockBox',
  setup() {
    const tokenBalance = ref(30);
    const lockAmount = ref(0);
    const wantCertificate = ref(false);
    const result = ref('');

    const lockTokens = () => {
      result.value = `Locked ${lockAmount.value} TTs! ${wantCertificate.value ? 'Certificate ready!' : ''}`;
      tokenBalance.value -= lockAmount.value;
      lockAmount.value = 0;
    };

    return { tokenBalance, lockAmount, wantCertificate, lockTokens, result };
  },
};
</script>