import {createApp} from 'vue'
import App from '@/App'
import '@/components/global.css'
import components from '@/components'

const app = createApp(App)

components.forEach(c => {
	app.component(c.name, c)
})

app.mount('#app')