import Vue from 'vue';
import router from './store/router';
import App from './components/App.vue';
import store from './store';
const app = new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App),
});
