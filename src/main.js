//jayden was here :)

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { PlatformInfo } from './plugins/PlatformInfo.js';

Vue.config.productionTip = false;

const platform = new PlatformInfo();

Object.defineProperty(Vue.prototype, '$Platform', { value: platform });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
