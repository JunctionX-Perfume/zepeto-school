<template>
  <v-layout row nowrap no-gutters id="vapp">
    <v-col v-if="!isLogin" cols="2" class="flex-grow-0 pa-0">
      <SideBar />
    </v-col>
    <v-col :cols="isLogin ? 12 : 10" class="flex-grow-1 pa-0">
      <v-layout column nowrap>
        <NavBar
          v-if="!isLogin"
          app
          color="primary"
          dark
        />
        <router-view
          class="flex-grow-1"
        ></router-view>
      </v-layout>
    </v-col>
  </v-layout>
</template>

<script>
import SideBar from '@/components/SideBar'
import NavBar from '@/components/NavBar'

export default {
  name: 'App',

  components: {
    SideBar,
    NavBar
  },

  data: () => ({
    //
  }),

  computed: {
    isLogin () {
      return this.$route.name === 'Login'
    }
  }
}
</script>

<style>
html, body {
  height: 100vh;
}
</style>
