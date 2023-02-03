<template>
  <transition-group name="post-list">
    <PostItem v-for="post in posts" :post="post" :key="post.id" @remove="removePost"/>
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
    },
  },
}
</script>

<style scoped>


.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.post-list-move {
  transition: transform 0.4s ease;
}

</style>