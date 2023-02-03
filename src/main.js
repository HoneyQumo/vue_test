import {createApp} from 'vue'
import App from '@/App'
import '@/components/global.css'
import components from '@/components'
import router from '@/router/router'

const app = createApp(App)

components.forEach(c => {
	app.component(c.name, c)
})

app
	.use(router)
	.mount('#app')