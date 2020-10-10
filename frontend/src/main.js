import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import VueInfiniteGrid from '@egjs/vue-infinitegrid'
import VueFlicking from '@egjs/vue-flicking'

Vue.use(VueInfiniteGrid)
Vue.use(VueFlicking)

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
