// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router
import 'vuetify/styles'; // Vuetify styles
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css'; // This should work if resolved correctly

// Vuetify setup
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#4CAF50', // Green for tree theme
          secondary: '#388E3C',
          accent: '#FFCA28', // Yellow for highlights
        },
      },
    },
  },
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');