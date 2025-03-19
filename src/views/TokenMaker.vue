<!-- src/views/TokenMaker.vue -->
<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Make Your Tree Tokens!</h2>
        <v-form @submit.prevent="makeTokens">
          <v-text-field v-model="amount" type="number" label="How many trees?" required></v-text-field>
          <v-file-input v-model="proof" label="Upload Proof" required></v-file-input>
          <v-text-field v-model="location" label="Where’s your project?" required></v-text-field>
          <p>Fee: 5¢ per token. Total: ${{ (amount * 0.05).toFixed(2) }}</p>
          <v-btn type="submit" color="primary">Make My Tokens!</v-btn>
        </v-form>
        <v-alert v-if="status" type="success" class="mt-4">{{ status }}</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TokenMaker',
  setup() {
    const amount = ref(0);
    const location = ref('');
    const proof = ref(null);
    const status = ref('');

    const makeTokens = async () => {
      status.value = 'Checking…';
      setTimeout(() => {
        status.value = `Done! You’ve got ${amount.value} TTs!`;
      }, 1000); // Replace with backend call
    };

    return { amount, location, proof, makeTokens, status };
  },
};
</script>