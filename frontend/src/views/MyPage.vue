<template>
<section class="mypage">
  <section class="mypage__quests">
    <section class="quests__personal">
      <div class="quest__header__personal">Personal</div>
      <div class="quest__header__items__personal">
        <Quests/>
      </div>
    </section>

    <section class="quests__groups">
      <div class="quest__header__group">Group</div>
      <div class="quest__header__items__group">
        <Quests v-for="(obj, idx) in objs" :key="idx" v-bind="obj" />
      </div>
    </section>
  </section>
  <section class="myposting">
    <div class="myposting__header">
      <div class="myposting__haeder__doc">My Posts</div>
      <div class="myposting__header__add">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
      </div>
    </div>
      <div class="myposting__items">
        <Post2></Post2>
        <Post2></Post2>
        <Post2></Post2>
        <Post2></Post2>
        <Post2></Post2>
        <Post2></Post2>
        <Post2></Post2>
        <Post2></Post2>
        <Post2></Post2>
        <Post2></Post2>
        <Post2></Post2>
        <Post2></Post2>
        <Post2></Post2>
        <Post2></Post2>
        <Post2></Post2>
        <Post2></Post2>
        <Post2></Post2>
        <Post2></Post2>
      </div>
  </section>
</section>
</template>

<script>
import Quests from '@/components/Quests'
import Post2 from '@/components/Post2'

export default {
  name: 'MyPage',
  components: {
    Quests,
    Post2
  },
  data: () => ({
    objs: [
      { title: 'CS Study', color: '#D0D1FE' },
      { title: 'Film Club', color: '#C8E7FF' },
      { title: 'Book Club', color: '#C1FCFF' },
      { title: 'Exercise', color: '#F2F2F2' }
    ]
  })
}

</script>

<style scoped>
.quest__header__personal, .quest__header__group {
  box-sizing: border-box;
  padding-left: 10px;
  margin-top: 10px;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 1.2em;
}
.mypage__quests {
  padding: 5px;
  display: flex;
  overflow-x: scroll;
  white-space:nowrap;
}
.mypage__quests::-webkit-scrollbar {
  height: 5px;
}
.mypage__quests::-webkit-scrollbar-track {
  background-color: white;
}
.mypage__quests::-webkit-scrollbar-thumb {
  background-color: #849fda;
  border-radius: 10px;
}
.quest__header__items__group {
  display:flex;
}
.myposting {
  margin: 10px;
}
.myposting__header {
  display: flex;
  align-items: center;
}
.myposting__haeder__doc {
  margin-left: 10px;
  margin-right: 20px;
  font-weight: bold;
  font-size: 1.2em;
}
.myposting__header__add {
  cursor: pointer;
}
.myposting__items {
  height: 60vh;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  overflow-y: scroll;
}
.myposting__items::-webkit-scrollbar {
  width: 5px;
}
.myposting__items::-webkit-scrollbar-track {
  background-color: white;
}
.myposting__items::-webkit-scrollbar-thumb {
  background-color: #D8BBFE;
}
.quest__group__title {
  margin-left: 10px;
  margin-bottom: 5px;
  font-weight: bold;
}
</style>
