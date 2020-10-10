<template>
  <v-container>
    <v-layout class="group-page justify-space-between" row>
      <v-col cols="3">
        <v-container class="my-feed feed-container">
          <h1>My Feed</h1>
          <FeedLine :feeds="myFeeds"/>
        </v-container>
      </v-col>
      <v-col cols="3">
        <v-container class="friend-feed feed-container">
          <FeedLine />
        </v-container>
      </v-col>
      <v-col cols="3">
        <v-container class="friend-feed feed-container">
          <FeedLine />
        </v-container>
      </v-col>
      <v-col cols="3">
        <v-container class="friend-feed feed-container">
          <FeedLine />
        </v-container>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
import FeedLine from '@/components/FeedLine.vue'

export default {
  name: 'GroupPage',
  components: {
    FeedLine
  },
  data: () => ({
    myFeeds: [
      1,
      2
    ]
  })
}
</script>

<style>
.group-page {
}

.feed-container {
  height: 90vh;
  border-radius: 16px;
}

.friend-feed {
  background: #ECECEC;
}

.my-feed {
  background: #EAEAFC;
}
</style>
