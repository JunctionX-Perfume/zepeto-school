<template>
  <div>
    <Posting v-for="(item, i) in list" :key="i" :html="item.src" :text="item.text"/>
  </div>
</template>

<script>
import Post from './Post'

export default {
  name: 'GridPosts',
  components: {
    Posting
  },
  data: () => {
    return {
      start: 0,
      loading: false,
      list: [{ src: '<div class="ql-editor" data-gramm="false" contenteditable="true" data-placeholder="Compose an epic..."><h1>Posting_1010</h1><p>Hi I\'m Yura</p></div>', text: 'Hello' }]
    }
  }
}
</script>
