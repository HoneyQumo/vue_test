import ky from 'ky'


export const postModule = {
	state: () => ({
		searchQuery: '',
		page: 1,
		posts: [],
	}),

	getters: {
		searchedPosts(state) {
			return state.posts.filter(post => {
				return post.title.toLowerCase().search(state.searchQuery.toLowerCase()) !== -1
			})
		},
	},

	mutations: {
		setPosts(state, posts) {
			state.posts = posts
		},
		setSearchQuery(state, event) {
			state.searchQuery = event.target.value
		},
	},

	actions: {
		async getPosts({ state }) {
			try {
				state.posts = await ky.get('https://jsonplaceholder.typicode.com/posts', {
					searchParams: {
						_limit: 10,
						_page: state.page,
					},
				}).json()
			} catch (e) {
				console.log(e.message)
			}
		},
		async loadMorePosts({ state, commit }) {
			try {
				state.page += 1
				const loadedPosts = await ky.get('https://jsonplaceholder.typicode.com/posts', {
					searchParams: {
						_limit: 10,
						_page: state.page,
					},
				}).json()
				commit('setPosts', [...state.posts, ...loadedPosts])
			} catch (e) {
				console.log(e.message)
			}
		},
	},

	namespaced: true,

}