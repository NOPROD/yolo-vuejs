import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false
Vue.use(VModal, { dynamic: true, draggable: true, injectModalsContainer: true })
Vue.use(VueMaterial)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
