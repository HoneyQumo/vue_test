<template>
	<div class="postPage">
		<div class="postPage__content">
			<input
					v-focus
					:value="searchQuery"
					@input="searchInput"
					type="text"
					placeholder="Поиск..."
					class="search"
			/>
			<PostList :posts="searchedPosts" @remove="removePost"/>
			<div v-intersection="loadMorePosts" class="loadMorePosts"></div>
		</div>
	</div>
</template>

<script>
import ky from 'ky'
import PostList from '@/components/PostList.vue'


export default {
	components: { PostList },
	data() {
		return {
			searchQuery: '',
			page: 1,
			posts: [],
		}
	},
	methods: {
		searchInput(event) {
			this.searchQuery = event.target.value
		},
		removePost(post) {
			this.posts = this.posts.filter(p => p.id !== post.id)
		},
		async getPosts() {
			try {
				this.posts = await ky.get('https://jsonplaceholder.typicode.com/posts', {
					searchParams: {
						_limit: 10,
						_page: this.page,
					},
				}).json()
			} catch (e) {
				console.log(e.message)
			}
		},
		async loadMorePosts() {
			try {
				this.page += 1
				const loadedPosts = await ky.get('https://jsonplaceholder.typicode.com/posts', {
					searchParams: {
						_limit: 10,
						_page: this.page,
					},
				}).json()
				this.posts = [...this.posts, ...loadedPosts]
			} catch (e) {
				console.log(e.message)
			}
		},
	},
	mounted() {
		this.getPosts()
	},
	computed: {
		searchedPosts() {
			return this.posts.filter(post => {
				return post.title.toLowerCase().search(this.searchQuery.toLowerCase()) !== -1
			})
		},
	},
}
</script>

<style scoped>
.postPage {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	min-height: 100vh;
}

.postPage__content {
	min-width: 400px;
	border-radius: 4px;
	padding: 20px;
}

.search {
	width: 600px;
	padding: 5px 10px;
	font-size: 14px;
	border: 1px solid teal;
	border-radius: 4px;
	margin-bottom: 10px;
}

.loadMorePosts {
	height: 30px;
	background-color: green;
}
</style>