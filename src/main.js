import { createApp } from 'vue'
import App from '@/App'
import '@/components/global.css'
import components from '@/components'
import router from '@/router/router'
import directives from '@/directives'
import store from '@/store'


const app = createApp(App)

components.forEach(c => {
	app.component(c.name, c)
})

directives.map((directive) => {
	app.directive(directive.name, directive)
})

app
	.use(router)
	.use(store)
	.mount('#app')