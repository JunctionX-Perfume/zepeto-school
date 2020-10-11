<template>
  <div class="quests">
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
  data: () => ({
    contents: [
      { content: '오늘의 퀘스트' },
      { content: '오늘의 퀘스트' },
      { content: '오늘의 퀘스트' },
      { content: '오늘의 퀘스트' },
      { content: '오늘의 퀘스트' }
    ]
  })
}
</script>

<style scoped>
.quests{
  box-sizing: border-box;
  width: 18vw;
  height: 20vh;
  box-shadow: 1px 1px 1px rgb(173, 173, 173);
  background-color: #DAE1FF;
  padding: 10px;
  margin-left: 5px;
  margin-right: 15px;
  border-radius: 15px;
  overflow-y: scroll;
}
</style>
