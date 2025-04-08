<!-- src/views/TokenStore.vue -->
<template>
  <v-container>
    <h2>Buy Carbon Ledger Tokens!</h2>
    <v-row>
      <v-col v-for="token in tokens" :key="token.id" cols="12" sm="6" md="4">
        <v-card>
          <v-card-title>{{ token.amount }} TTs from {{ token.planter }}</v-card-title>
          <v-card-text> &hbar; {{ token.price }} each</v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="addToCart(token)">Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col>
        <v-card>
          <v-card-title>Your Cart: {{ cartTotal }} TTs</v-card-title>
          <v-card-text>Total: &hbar; {{ (cartTotal * 1 + cartTotal * 0.02).toFixed(2) }} (incl. 2¢ fee)</v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="checkout">Pay with Wallet</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TokenStore',
  setup() {
    const tokens = ref([
      { id: 1, amount: 50, planter: 'Bob’s Forest', price: 1 },
      { id: 2, amount: 20, planter: 'Windy Farm', price: 1.5 },
    ]);
    const cart = ref([]);
    const cartTotal = ref(0);

    const addToCart = (token) => {
      cart.value.push(token);
      cartTotal.value += token.amount;
    };

    const checkout = () => {
      alert(`Paying for &hbar; {cartTotal.value} TTs!`);
      cart.value = [];
      cartTotal.value = 0;
    };

    return { tokens, cartTotal, addToCart, checkout };
  },
};
</script>