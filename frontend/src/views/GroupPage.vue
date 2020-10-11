<template>
  <v-container>
    <v-layout class="group-page justify-space-between" row>
      <v-col cols="3">
        <v-card class="feed-container pa-5" rounded elevation="6">
          <v-container class="my-feed feed-container">
            <v-row>
              <h1>My Feed</h1>
            </v-row>
            <v-row>
              <div class="plus-btn">
                <v-icon>mdi-plus</v-icon>
              </div>
            </v-row>
            <v-row class="justify-center">
              <FeedLine class="feed-line-wrapper" :feeds="myFeeds"/>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="feed-container pa-5" rounded elevation="6">
          <v-container class="friend-feed feed-container">
            <v-row>
              <img class="friends-image" src="https://i.imgur.com/VZcKVRt.png">
            </v-row>
            <v-row class="justify-center">
              <FeedLine class="feed-line-wrapper" :feeds="groups_feeds[0]"/>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="feed-container pa-5" rounded elevation="6">
          <v-container class="friend-feed feed-container">
            <v-row>
              <img class="friends-image" src="https://i.imgur.com/E9LgAl4.png">
            </v-row>
            <v-row class="justify-center">
              <FeedLine class="feed-line-wrapper" :feeds="groups_feeds[1]"/>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="feed-container pa-5" rounded elevation="6">
          <v-container class="friend-feed feed-container">
            <v-row>
              <img class="friends-image" src="https://i.imgur.com/cUbNXrW.png">
            </v-row>
            <v-row class="justify-center">
              <FeedLine class="feed-line-wrapper" :feeds="myFeeds"/>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
import feeds from '@/assets/dummy_feeds.json'
import FeedLine from '@/components/FeedLine.vue'

export default {
  name: 'GroupPage',
  components: {
    FeedLine
  },
  props: {
    groups: Array
  },
  data: () => ({
    myFeeds: feeds.myfeeds,
    groups_feeds: feeds.groups_feeds
  })
}
</script>

<style>
.friends-image {
  width: 100%;
  max-width: 320px;
  margin-top: -45px;
  margin-left: -5px;
}

.plus-btn {
  width: 100%;
  margin: 30px;
  border: 2px dashed grey;
  height: 60px;
  padding: 15px;
  text-align: center;
}

.justify-center {
  justify-content: center;
  overflow-y: scroll;
  height: 75vh;
}

.plus-btn:hover {
  cursor: pointer;
  background: grey;
}

.group-page {
}

.feed-container {
  width: 100%;
  height: 90vh;
  border-radius: 16px;
}

.friend-feed {
  background: #ECECEC;
}

.my-feed {
  background: #EAEAFC;
}

.feed-line-wrapper {
  width: 100%;
  margin: 20px;
}
</style>
