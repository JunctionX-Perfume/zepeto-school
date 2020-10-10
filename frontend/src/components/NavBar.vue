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
      { name: 'My Page', path: '/mypage' },
      { name: 'Group Page', path: '/grouppage' }
    ]
  })
}
</script>

<style scoped>
.nav-bar {
  height: 30px;
  margin-left: 0;
  margin-right: 0;
}

.v-btn {
  height: 20px;
}
</style>
