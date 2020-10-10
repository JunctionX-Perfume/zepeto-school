<template>
  <v-row>
    <v-card elevation="2" outlined shaped>
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
    const img = this.img
    console.log(img)
  }
}
</script>

<style lang="postcss" scoped>
.card {
    border-radius: 16px;
}
</style>
