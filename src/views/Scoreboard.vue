<!-- src/views/Scoreboard.vue -->
<template>
  <v-container>
    <h2>Transactions</h2>
    <v-list>
      <v-list-item v-for="event in events" :key="event.id">{{ event.text }}</v-list-item>
    </v-list>
    <v-text-field v-model="search" label="Search your wallet ID" prepend-icon="mdi-magnify"></v-text-field>
    <p>Top Planter: {{ topPlanter }}</p>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'Scoreboard',
  setup() {
    const events = ref([
      { id: 1, text: 'Bob made 50 TTs at 10:00 AM' },
      { id: 2, text: 'Toy Co. bought 20 TTs at 10:05 AM' },
    ]);
    const search = ref('');
    const topPlanter = ref('Bob (500 TTs)');

    onMounted(() => {
      setInterval(() => {
        events.value.push({ id: Date.now(), text: `Someone saved ${Math.floor(Math.random() * 10)} TTs!` });
      }, 10000);
    });

    return { events, search, topPlanter };
  },
};
</script>