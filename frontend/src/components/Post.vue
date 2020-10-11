<template>
  <v-row>
    <v-card class="post-card" v-if="true" elevation="2" shaped>
        <v-text class="text-card" v-html="post"></v-text>
    </v-card>
    <PostEditor v-else :html="post"/>
  </v-row>
</template>

<script>
import PostEditor from './PostEditor.vue'

export default {
  name: 'Posting',
  props: {
    post: String
  },
  components: {
    PostEditor
  },
  mounted () {
  }
}
</script>

<style lang="postcss" >
.post-card {
    border-radius: 24px;
    padding: 16px;
}

#doc {
}
</style>
