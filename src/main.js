import Vue from 'vue';
import App from './App';
import AppCore from './plugins/AppCore';

Vue.use(AppCore);

new Vue({
  render: h => h(App)
}).$mount('#app');
