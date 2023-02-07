import { computed, ref } from 'vue'


export function useSearchPosts(posts) {
	const searchQuery = ref('')

	const searchedPosts = computed(() => {
		return posts.value.filter(post => {
			return post.title.toLowerCase().search(searchQuery.value.toLowerCase()) !== -1
		})
	})

	return {
		searchQuery,
		searchedPosts,
	}
}