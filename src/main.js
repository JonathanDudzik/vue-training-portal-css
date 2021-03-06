import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'

// Library imports
import Greensock from 'gsap'

// Proxy to a property of the Vue prototype object. 
Object.defineProperty(Vue.prototype, '$Greensock', { value: Greensock });

// Alerts that you are running development mode.
Vue.config.productionTip = true;

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app')