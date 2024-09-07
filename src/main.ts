import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import './style.css';
import { createPinia } from 'pinia';

import App from './App.vue'

createApp(App).use(TDesign).use(createPinia()).mount('#app')
