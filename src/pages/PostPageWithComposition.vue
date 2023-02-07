<template>
	<div class="postPage">
		<div class="postPage__content">
			<input
					v-focus
					v-model="searchQuery"
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
import { usePosts } from '@/hooks/usePosts'
import { useSearchPosts } from '@/hooks/useSearchPosts'
import { ref } from 'vue'
import { useLoadMorePosts } from '@/hooks/useLoadMorePosts'


export default {
	components: { PostList },
	setup(props) {
		const page = ref(1)

		const { posts } = usePosts(page)
		const { searchQuery, searchedPosts } = useSearchPosts(posts)
		const { loadMorePosts } = useLoadMorePosts(posts, page)

		return {
			posts,
			searchQuery,
			searchedPosts,
			loadMorePosts
		}
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