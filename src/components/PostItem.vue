<template>
  <div class="post__item">
    <div>
      <h4 class="post__title">{{post.id}}. {{ post.title }}</h4>
      <p class="post__desc">{{ post.body }}</p>
    </div>
    <div class="post__buttons">
			<button class="post__button" @click="$router.push(`/posts/${post.id}`)">Открыть</button>
			<button class="post__button" @click="removePost(post)">X</button>
		</div>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  emits: ['remove'],
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removePost(post) {
      this.$emit('remove', post)
    },
  },

}
</script>

<style scoped>
.post__item {
  display: flex;
  align-items: center;
  width: 600px;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid teal;
  background-color: lightgray;
}

.post__title {
  font-size: 24px;
	line-height: 32px;
  font-weight: 600;
  margin-bottom: 10px;
}

.post__title:first-letter {
  text-transform: capitalize;
}

.post__desc {
}

.post__buttons {
	display: flex;
	gap: 10px;
}

.post__button {
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  background-color: lightgray;
  color: teal;
  border: 1px solid teal;
  border-radius: 4px;
  padding: 8px;
}

.post__delete:active {
  background-color: white;
}
</style>