<template>
  <v-layout>
    <v-row class="quest-decks">
      <v-col cols="3">
        <QuestDeck />
      </v-col>
      <v-col cols="9">
        <v-row>
          <v-col cols="4">
            <QuestDeck />
          </v-col>
          <v-col cols="4">
            <QuestDeck />
          </v-col>
          <v-col cols="4">
            <QuestDeck />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <h1>My Posts</h1>
      <MyPosts />
    </v-row>
  </v-layout>
</template>

<script>
import QuestDeck from '@/components/QuestDeck.vue'
import MyPosts from '@/components/MyPosts.vue'

export default {
  name: 'MyPage',
  components: {
    QuestDeck,
    MyPosts
  }
}

</script>

<style scoped>
.quest-decks {
  margin-left: 0;
  margin-right: 0;
}
</style>
