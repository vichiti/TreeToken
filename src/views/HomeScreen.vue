<!-- src/views/HomeScreen.vue -->
<template>
  <v-container class="text-center">
    <v-row>
      <v-col>
        <h1>Welcome to Carbon Ledger Shop!</h1>
        <p>Save the Planet, One Token at a Time!</p>
        <p>Total CO2 Saved: {{ totalCO2 }} Buckets!</p>
        <v-btn color="primary" to="/make-tokens" class="ma-2">I'm a Carbon Reducer</v-btn>
        <v-btn color="primary" to="/buy-tokens" class="ma-2">I'm a Carbon Emitter</v-btn>
        <v-btn color="primary" to="/scoreboard" class="ma-2">See Transactions</v-btn>
        <v-icon large class="earth">mdi-earth</v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'HomeScreen',
  setup() {
    const totalCO2 = ref(5432);

    onMounted(() => {
      setInterval(() => totalCO2.value += 1, 5000); // Simulate live update
    });

    return { totalCO2 };
  },
};
</script>

<style scoped>
.earth { animation: spin 10s infinite linear; }
@keyframes spin { 100% { transform: rotate(360deg); } }
</style>