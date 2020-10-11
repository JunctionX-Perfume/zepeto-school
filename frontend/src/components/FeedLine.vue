<template>
  <div>
    <v-card v-for="(post, idx) in feeds" :key="idx" rounded elevation="3" class="feed-post">
      <v-container>
        <Post :post="post"/>
      </v-container>
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
  padding: 15px;
  padding-top: 5px;
}
</style>
