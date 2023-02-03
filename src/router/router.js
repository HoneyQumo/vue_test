import Main from '@/pages/Main'
import {createRouter, createWebHistory} from 'vue-router'
import PostPage from '@/pages/PostPage'
import About from '@/pages/About'


const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/posts',
		component: PostPage,
	},
	{
		path: '/about',
		component: About,
	},
]


const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router