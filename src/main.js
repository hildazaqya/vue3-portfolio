import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const app = createApp(App);
app.use(router).use(AOS.init());
app.mount('#app');