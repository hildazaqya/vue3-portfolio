import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faLaptop, faGithub)
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).use(AOS.init());
app.mount('#app');