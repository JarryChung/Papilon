import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

<%_ if (options.axios) { _%>
import Axios from './plugins/axios.js'
Vue.use(Axios, { target: Vue.prototype.$api = {} })
<%_ } _%>

<%_ if (options.css === 'reset') { _%>
import './assets/styles/reset.scss'
<%_ } else if (options.css === 'normalize') { _%>
import './assets/styles/normalize.scss'
<%_ } _%>

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
