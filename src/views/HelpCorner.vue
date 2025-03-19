<!-- src/views/HelpCorner.vue -->
<template>
  <v-container>
    <h2>Help Corner</h2>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title>What’s a Tree Token?</v-expansion-panel-title>
        <v-expansion-panel-text>It’s a coin that shows you stopped CO2!</v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>How do I buy one?</v-expansion-panel-title>
        <v-expansion-panel-text>Go to Buy Tokens and pick some!</v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-btn color="primary" class="mt-4" @click="playVideo">Watch Video</v-btn>
    <p class="mt-4">Contact us: <a href="mailto:help@treetoken.shop">help@treetoken.shop</a></p>
  </v-container>
</template>

<script>
export default {
  name: 'HelpCorner',
  methods: {
    playVideo() {
      alert('Playing video...');
    },
  },
};
</script>