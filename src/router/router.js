import { createRouter, createWebHistory } from 'vue-router'


const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/pages/Main'),
	},
	{
		path: '/posts',
		name: 'PostPage',
		component: () => import('@/pages/PostPage'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('@/pages/About'),
	},
	{
		path: '/posts/:id',
		name: 'PostId',
		component: () => import('@/pages/PostIdPage'),
	},
	{
		path: '/store',
		name: 'store',
		component: () => import('@/pages/PostPageWithStore')
	},
	{
		path: '/composition',
		name: 'composition',
		component: () => import('@/pages/PostPageWithComposition')
	}
]


const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router