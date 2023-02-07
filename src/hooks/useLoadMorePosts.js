import ky from 'ky'
import { ref } from 'vue'


export function useLoadMorePosts(posts, page) {

	const loadMorePosts = async () => {
		try {
			page.value += 1
			const loadedPosts = await ky.get('https://jsonplaceholder.typicode.com/posts', {
				searchParams: {
					_page: page.value,
					_limit: 10,
				},
			}).json()
			posts.value = [...posts.value, ...loadedPosts]
		} catch (e) {
			console.log(e.message)
		}
	}

	return {
		loadMorePosts
	}

}