import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'
import RouterConfig from './router'
import store from './vuex/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:RouterConfig
})

new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  components: { App },
  router:router,
  store:store
});