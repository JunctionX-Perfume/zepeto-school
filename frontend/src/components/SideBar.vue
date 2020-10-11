<template>
  <v-container class="side-bar pa-0">
    <h1> {{ title }} </h1>
    <Profile v-bind="user"/>
    <v-col v-if="isMyPage">
    <!-- <div v-if="isMyPage" class="side-bar-row"> -->
      <ProgressView :progresses="progresses"/>
      <div class="btns">
        <button style="background-color: #FFCBF2; margin-top: 20px;">New Post</button>
        <button style="background-color: #DEAAFF">Manage Profile</button>
      </div>
    <!-- </div> -->
    </v-col>
    <v-row v-else-if="isGroupPage">
    <!-- <div v-else-if="isGroupPage" class="side-bar-row"> -->
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
    <!-- </div> -->

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
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  height: 100vh;
  /* border-right: 1px black solid; */
}

.side-bar-row {
  display: flex;
}

button {
  /* max-width: 20%; */
  width: 10vw;
  font-size: 1em;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 8px;
}
.btns{
  display: flex-flow;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
