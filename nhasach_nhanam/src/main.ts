import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/bootstrap.min.css'
import './assets/css/normalize.css'
import './assets/css/font-awesome.min.css'
import './assets/css/icomoon.css'
import './assets/css/jquery-ui.css'
import './assets/css/owl.carousel.css'
import './assets/css/transitions.css'
import './assets/css/main.css'
import './assets/css/color.css'
import './assets/css/responsive.css'
const app = createApp(App)

app.use(router)

app.mount('#app')
