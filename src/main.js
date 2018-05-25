import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(Vuetify)

Vue.prototype.$bg_color = {
  hangouts: 'green',
  discord: 'purple',
  facebook: 'blue'
}

new Vue({
  render: h => h(App)
}).$mount('#app')
