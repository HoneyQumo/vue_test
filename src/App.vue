<template>
  <div class="app">
    <div class="app__content">
      <input :value="searchQuery" @input="searchInput" type="text" placeholder="Поиск..." class="search"/>
      <PostList :posts="searchedPosts" @remove="removePost"/>
    </div>
  </div>
</template>

<script>
import ky from 'ky'


export default {
  data() {
    return {
      searchQuery: '',
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
        this.posts = await ky.get('https://jsonplaceholder.typicode.com/posts?_limit=10').json()
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
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
}

.search {
  width: 600px;
  padding: 5px 10px;
  font-size: 14px;
  border: 1px solid teal;
  border-radius: 4px;
  margin-bottom: 10px;
}

.app__content {
  min-width: 400px;
  border-radius: 4px;
  padding: 20px;
}
</style>