import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import SemanticUI from 'semantic-ui-vue';

import 'semantic-ui-css/semantic.min.css';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(SemanticUI);

app.mount('#app')
