<template>
  <v-row>
    <v-card v-if="false" elevation="2" outlined shaped>
        <v-text class="card" v-html="html"></v-text>
    </v-card>
    <PostEditor/>
  </v-row>
</template>

<script>
import PostEditor from './PostEditor.vue'

export default {
  name: 'Posting',
  props: {
    html: String
  },
  components: {
    PostEditor
  },
  mounted () {
  }
}
</script>

<style lang="postcss" scoped>
.card {
    border-radius: 24px;
}
</style>
