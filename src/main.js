import { createApp } from 'vue'
import App from './App.vue'
// import '../lib/index.css' // 0.1.0和0.1.1版本需要引入样式文件，之后的版本无需引入
import vProgressiveImage from '../lib/v-progressive-image'

createApp(App).use(vProgressiveImage, {
	removePreview: true,
    animation: true,
	scale: 1.2
}).mount('#app')
