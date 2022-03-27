import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
// import apiRequest from './api'
import './style/style.css'

const app = createApp(App)
// app.config.globalProperties.$api = apiRequest
app.use(router).use(store).mount('#app')
