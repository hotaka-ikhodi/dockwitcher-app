import './assets/main.css'

import DockwitcherTheme from "./dockwitcher-theme";

import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(DockwitcherTheme);

app.mount('#app')
