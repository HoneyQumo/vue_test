<template>
  <div class="post__item">
    <div>
      <h4 class="post__title">{{post.id}}. {{ post.title }}</h4>
      <p class="post__desc">{{ post.body }}</p>
    </div>
    <button class="post__delete" @click="removePost(post)">X</button>
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
  line-height: 1;
  margin-bottom: 10px;
  font-weight: 600;
}

.post__title:first-letter {
  text-transform: capitalize;
}

.post__desc {
}

.post__delete {
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  background-color: lightgray;
  color: teal;
  border: 1px solid teal;
  border-radius: 4px;
  margin-left: 10px;
  padding: 8px;
}

.post__delete:active {
  background-color: white;
}
</style>