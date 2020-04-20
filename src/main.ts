import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueI18n from 'vue-i18n'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(VueMaterial)
Vue.use(VueParticles)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
