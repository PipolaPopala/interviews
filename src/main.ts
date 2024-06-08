import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app";
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';

import PrimeVue from 'primevue/config'
import Toast from 'primevue/toast';
import Tooltip from 'primevue/tooltip'

import Menubar from 'primevue/menubar'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import ProgressSpinner from 'primevue/progressspinner';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ConfirmDialog from 'primevue/confirmdialog';
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar'
import RadioButton from 'primevue/radiobutton'
import Badge from 'primevue/badge'
import Chart from 'primevue/chart'

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

app.use(ConfirmationService)
app.use(ToastService)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.directive('tooltip', Tooltip)
app.component('app-menubar', Menubar)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.component('app-toast', Toast)
app.component('app-progress', ProgressSpinner)
app.component('app-card', Card)
app.component('app-datatable', DataTable)
app.component('app-column', Column)
app.component('app-dialog', ConfirmDialog)
app.component('app-input-number', InputNumber)
app.component('app-textarea', Textarea)
app.component('app-calendar', Calendar)
app.component('app-radio', RadioButton)
app.component('app-badge', Badge)
app.component('app-chart', Chart)

app.mount('#app')
