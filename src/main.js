import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Appjs from './components/backend/app'
import VueWebSpeech from 'vue-web-speech'
import store from './store'
import './auth'
import AudioRecorder from '@/components/recorder.vue'
import AudioPlayer   from '@/components/player.vue'

// import axios from "axios";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import GAuth from 'vue-google-oauth2'
import installElement from './plugins/element/installElement.js'

import vuetify from './plugins/vuetify'

Vue.use(VueWebSpeech)
Vue.use(GAuth, { clientId: '235221799021-bjgjslucul3jm980aur9acp46kv0s4o2.apps.googleusercontent.com', scope: 'profile email https://www.googleapis.com/auth/plus.login' })
Vue.use(installElement)
Vue.use(Appjs)



Vue.use(GAuth, {
  clientId: '768834812579-007e5802er7gj3c93p8qa9568h8bj3na.apps.googleusercontent.com', scope: 'email', prompt: 'consent', fetch_basic_profile: false
})
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false


new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),

}).$mount('#app')

const components = {
  AudioRecorder,

  install (Vue) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.prototype.$eventBus = Vue.prototype.$eventBus || new Vue

    Vue.component('audio-recorder', AudioRecorder)
    Vue.component('audio-player', AudioPlayer)
  }
}

export default components
export { AudioPlayer, AudioRecorder }