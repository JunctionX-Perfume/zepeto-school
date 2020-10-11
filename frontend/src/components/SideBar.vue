<template>
  <v-container class="side-bar pa-0">
    <h1> {{ title }} </h1>
    <Profile v-bind="user"/>
    <v-row v-if="isMyPage">
      <ProgressView :progresses="progresses"/>
      <v-btn> Write New Post</v-btn>
      <v-btn> Manage Profile</v-btn>
    </v-row>
    <v-row v-else-if="isGroupPage">
      <div>
        <span>
          <h2>Group Mission</h2>
        </span>
        <span>
          +
        </span>
      </div>
      <v-container>
      </v-container>
    </v-row>

  </v-container>
</template>

<script>
import Profile from '@/components/Profile.vue'
import ProgressView from '@/components/ProgressView.vue'

export default {
  name: 'SideBar',
  components: {
    ProgressView,
    Profile
  },
  props: {
    title: String,
    user: Object,
    progresses: Array
  },
  computed: {
    isMyPage () {
      return this.$route.name === 'MyPage'
    },
    isGroupPage () {
      return this.$route.name === 'GroupPage'
    }
  }
}
</script>

<style>
.side-bar {
  height: 100vh;
}
</style>
