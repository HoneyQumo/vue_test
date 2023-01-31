<template>
  <div>
    <h4 class="post__title"><strong>Название:</strong> {{ post.title }}</h4>
    <p class="post__desc"><strong>Описание:</strong> {{ post.body }}</p>
  </div>
  <button class="post__delete" @click="removePost(post)">X</button>
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
    }
  }

}
</script>

<style scoped>

.post__title {
}

.post__desc {
}

.post__delete {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  line-height: 1;
  background-color: lightgray;
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px 8px;
  margin-left: 10px;
}

.post__delete:active {
  background-color: white;
}
</style>