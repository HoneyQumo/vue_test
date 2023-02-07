import ky from 'ky'
import { onMounted, ref} from 'vue'


export function usePosts(page) {
	const posts = ref([])
	const fetching = async () => {
		try {
			posts.value = await ky.get('https://jsonplaceholder.typicode.com/posts', {
				searchParams: {
					_page: page.value,
					_limit: 10,
				},
			}).json()
		} catch (e) {
			console.log(e.message)
		}
	}
	onMounted(fetching)

	return {
		posts
	}
}