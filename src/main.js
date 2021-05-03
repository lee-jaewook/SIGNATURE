import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Appjs from './components/backend/app'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import GAuth from 'vue-google-oauth2'
//import GAuth from './plugins/gAuth'
import installElement from './plugins/element/installElement.js'

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
  render: h => h(App)
}).$mount('#app')


