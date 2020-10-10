import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: {
    }
  },
  mutations: {
    SET_IS_LOGIN: (state, payload) => {
      state.isLogin = payload
    },
    SET_USER: (state, user) => {
      state.user = user
    }
  },
  getters: {
    getIsLogin: state => state.isLogin
  },
  actions: {
    tryLogin ({ commit }, params) {
      return axios.get('http://172.17.10.137:3000/api/login', {
        params
      })
        .then(res => {
          if (res.data.user !== undefined) {
            commit('SET_IS_LOGIN', true)
            commit('SET_USER', res.data.user)
            return true
          } else {
            return false
          }
        })
    }
  },
  modules: {
  }
})
