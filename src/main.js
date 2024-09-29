import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'; 

import router from './router'

createApp(App).use(router).use(PrimeVue).mount('#app')
