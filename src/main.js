import { createApp } from 'vue'
import App from './App.vue'
import '../lib/index.css'
import vueEmage from '../lib/vue-emage'

createApp(App).use(vueEmage, {
	removePreview: false,
    animation: false
}).mount('#app')
