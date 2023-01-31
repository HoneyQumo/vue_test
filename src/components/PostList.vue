<template>
  <transition-group name="posts">
    <div v-for="post in posts" :key="post.id" class="post__item">
      <PostItem :post="post" @remove="removePost"/>
    </div>
  </transition-group>
</template>

<script>
import PostItem from '@/components/PostItem'
export default {
  name: 'PostList',
  components: {PostItem},
  emits: ['remove'],
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removePost(post) {
      this.$emit('remove', post)
    }
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


.posts-enter-active,
.posts-leave-active {
  transition: all 0.4s ease;
}

.posts-enter-from,
.posts-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.posts-move {
  transition: transform 0.4s ease;
}

</style>