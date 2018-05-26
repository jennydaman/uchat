import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import VueMeta from 'vue-meta'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: colors.grey.base
  }
})
Vue.use(VueMeta)

Vue.prototype.$platform = {
  hangouts: {
    color: colors.green.base,
    colorName: 'green',
    icon: '/uchat/img/third_party/hangouts.png',
    name: 'Google Hangouts'
  },
  discord: {
    color: colors.purple.base,
    colorName: 'purple',
    icon: '/uchat/img/third_party/discord.svg',
    name: 'Discord'
  },
  facebook: {
    color: colors.blue.base,
    colorName: 'blue',
    icon: '/uchat/img/third_party/facebook.png',
    name: 'Facebook'
  }
}

new Vue({
  render: h => h(App)
}).$mount('#app')
