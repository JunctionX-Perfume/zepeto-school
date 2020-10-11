<template>
  <div class="quests" :style="`{ background: ${color} }`">
    <div class="quests__title">{{ title }}</div>
    <Quest v-for="(content, idx) in contents" :key="idx" v-bind="content" />
  </div>
</template>

<script>
import Quest from '@/components/Quest.vue'

export default {
  name: 'Quests',
  components: {
    Quest
  },
  props: {
    title: String,
    color: String
  },
  data: () => ({
    contents: [
      { content: '오늘의 퀘스트' },
      { content: '오늘의 퀘스트' },
      { content: '오늘의 퀘스트' },
      { content: '오늘의 퀘스트' },
      { content: '오늘의 퀘스트' }
    ]
  }),
  mounted () {
    this.$el.style.background = this.color
  }
}
</script>

<style scoped>
.quests{
  box-sizing: border-box;
  width: 18vw;
  max-height: 20vh;
  box-shadow: 1px 1px 1px rgb(173, 173, 173);
  background-color: #DAE1FF;
  padding: 10px;
  margin-left: 5px;
  margin-right: 20px;
  border-radius: 20px;
  overflow-y: scroll;
}
.quests::-webkit-scrollbar {
  width: 5px;
}
.quests::-webkit-scrollbar-track {
  background-color: white;
}
.quests::-webkit-scrollbar-thumb {
  background-color: #849fda;
  border-radius: 10px;
}
.quests__title{
  margin-left: 5px;
  margin-bottom: 15px;
  font-size: 0.6em;
}
</style>
