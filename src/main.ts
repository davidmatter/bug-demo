import Vue from 'vue'
import App from './App.vue'

import {StripeCardElement} from '@stripe/stripe-js'

const x: StripeCardElement | null = null
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
