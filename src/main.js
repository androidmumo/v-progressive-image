import { createApp } from 'vue'
import App from './App.vue'
import '../lib/index.css'
import vProgressiveImage from '../lib/v-progressive-image'

createApp(App).use(vProgressiveImage, {
	removePreview: false,
    animation: false
}).mount('#app')
