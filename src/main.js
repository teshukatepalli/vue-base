import Vue from 'vue'
import App from './App.vue'
import config from '@/config';
import router from './router'
import store from './store'

Vue.config.productionTip = false


if(config.env == 'development'){
  document.title += ` - Dev`;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');