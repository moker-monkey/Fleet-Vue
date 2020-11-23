import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/plugins/i18n'
import animate from 'animate.css'
import '@/plugins/element'
import '@/plugins/apiVue'
import '@/router/routerListener'


import '@/styles/element-variables.scss'
import '@/styles/index.scss'

console.log('animate', animate)
Vue.config.productionTip = false;
Vue.use(animate)

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
