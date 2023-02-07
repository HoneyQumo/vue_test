<template>
	<div class="postPage">
		<div class="postPage__content">
			<input
					v-focus
					:value="searchQuery"
					@input="setSearchQuery"
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
import PostList from '@/components/PostList.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'


export default {
	components: { PostList },
	data() {
		return {}
	},
	mounted() {
		this.getPosts()
	},
	methods: {
		...mapMutations({
			setPosts: 'post/setPosts',
			setSearchQuery: 'post/setSearchQuery',
			removePost: 'post/removePost',
		}),
		...mapActions({
			loadMorePosts: 'post/loadMorePosts',
			getPosts: 'post/getPosts',
		}),

	},
	computed: {
		...mapState({
			searchQuery: state => state.post.searchQuery,
			page: state => state.post.page,
			posts: state => state.post.posts,
		}),
		...mapGetters({
			searchedPosts: 'post/searchedPosts',
		}),
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