import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app";
import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import ProgressSpinner from 'primevue/progressspinner';

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: "AIzaSyCJK5lFMwsWo4rRqQIL876TvOE3HM26-Co",
  authDomain: "interviews-438bb.firebaseapp.com",
  projectId: "interviews-438bb",
  storageBucket: "interviews-438bb.appspot.com",
  messagingSenderId: "611088733908",
  appId: "1:611088733908:web:e0a3d16684cbdc40d80d41"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(ToastService)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('app-menubar', Menubar)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.component('app-toast', Toast)
app.component('app-progress', ProgressSpinner)

app.mount('#app')
