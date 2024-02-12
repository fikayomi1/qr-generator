// main.js
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import genQRcodes from './components/genQRcodes.vue';
import genQRHistory from './components/genQRHistory.vue';
import App from './App.vue'
import store from './store';
import "./assets/main.css"

const app = createApp(App);
app.use(store);


const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: genQRcodes },
      { path: '/history', component: genQRHistory }
    ]
  });

app.use(router);
app.mount('#app');
