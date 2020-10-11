<template>
  <v-layout row class="nav-bar mx-0">
    <NavBtn v-for="(btn, idx) in btns" :key="idx" v-bind="btn" />
  </v-layout>
</template>

<script>
import NavBtn from '@/components/NavBtn.vue'

export default {
  name: 'NavBar',
  components: {
    NavBtn
  },
  data: () => ({
    btns: [
      { name: 'Current Group' },
      { name: 'My Page', path: '/mypage' },
      { name: 'Group Page', path: '/grouppage' },
      { name: 'logout' }
    ]
  })
}
</script>

<style scoped>
.nav-bar {
  height: 20px;
  margin-left: 0px;
  margin-right: 0px;
  padding-bottom: 0px;
  display:flex;
  justify-content: space-between;
  background-color: #e3f1fc;
}

.v-btn {
  height: 20px;
}
</style>
