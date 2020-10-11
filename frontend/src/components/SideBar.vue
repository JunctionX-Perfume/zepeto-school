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
      <div class="group__sidebar">
        <div class="group__sidebar__header">
          <div class="group__sidebar__header__letter">
            Group Mission
          </div>
          <div class="group__sidebar__header__icon">
            <img src="../assets/add-24px.svg"/>
          </div>
        </div>
        <div class="group__sidebar__content">
          <div class="group__sidebar__content__quest">
            <input type="checkbox" name="xxx" value="yyy" checked>
            <div class="group__sidebar__content__quest_letter">오늘의 퀘스트</div>
            <div class="group__sidebar__content__quest_letter"> 3 / 5</div>
          </div>
          <div class="group__sidebar__content__quest">
            <input type="checkbox" name="xxx" value="yyy" checked>
            <div class="group__sidebar__content__quest_letter">오늘의 퀘스트</div>
            <div class="group__sidebar__content__quest_letter"> 2 / 5</div>
          </div>
          <div class="group__sidebar__content__quest">
            <input type="checkbox" name="xxx" value="yyy">
            <div class="group__sidebar__content__quest_letter">오늘의 퀘스트</div>
            <div class="group__sidebar__content__quest_letter"> 1 / 5</div>
          </div>
          <div class="group__sidebar__content__quest">
            <input type="checkbox" name="xxx" value="yyy" checked>
            <div class="group__sidebar__content__quest_letter">오늘의 퀘스트</div>
            <div class="group__sidebar__content__quest_letter"> 4 / 5</div>
          </div>
        </div>
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

<style scoped>
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
.group__sidebar {
  display: flex;
  flex-direction: column;
}
.group__sidebar__header {
  box-sizing: border-box;
  margin-top: 20px;
  display: flex;
  float: left;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.group__sidebar__header__letter {
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 10px;
}
.group__sidebar__header__icon {
  cursor: pointer;
}
.group__sidebar__content {
  width: 11vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: rgb(219, 219, 219);
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgb(201, 201, 201);
}
.group__sidebar__content__quest{
  box-sizing: border-box;
  background-color: white;
  font-size: 0.8em;
  padding: 0.5vw;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
