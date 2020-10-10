<template>
  <v-layout row nowrap no-gutters id="vapp">
    <v-col v-if="!isLogin" cols="2" class="flex-grow-0 pa-0">
      <SideBar v-bind="mypage"/>
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
    mypage: {
      title: 'My Page',
      progresses: [
        { name: 'my progress', value: 32.7 },
        { name: 'group progress', value: 64.3 }
      ],
      user: {
        name: 'Jonghun',
        hash: 'hash',
        pose: 'pose',
        msg: 'Hi! I\'m so glad to be here !!',
        url: 'https://render-cdn.zepeto.io/20201009/12/39mqKIscVoDtGWeGBe'
      }
    },
    grouppage: {
      title: 'CS Study',
      missions: [
        { name: 'One-day One-commit', completed: 'false', progress: '3 / 5' },
        { name: 'Solve an Algorithm Problem', completed: 'true', progress: '2 / 5' }
      ]
    }
  }),

  computed: {
    isLogin () {
      return this.$route.name === 'Login'
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
html, body {
  height: 100vh;
}
</style>
