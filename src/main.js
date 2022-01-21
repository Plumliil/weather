import {
    createApp
} from 'vue'
import App from './App.vue'
import './assets/css/global.css'
import axios from 'axios'



const app = createApp(App);
app.config.globalProperties.$http = axios;
axios.defaults.baseURL="https://api.iyk0.com/";
app.mount('#app');