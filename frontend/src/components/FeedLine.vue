<template>
  <div>
    <v-card rounded elevation="3" class="feed-post">
      <Post v-for="(post, idx) in feeds" :key="idx" :post="post"/>
    </v-card>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
  name: 'FeedLine',
  components: {
    Post
  },
  props: {
    feeds: Array
  }
}
</script>

<style>
.feed-post {
  width: 100%;
  margin-bottom: 20px;
}
</style>
