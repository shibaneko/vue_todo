import Vue from 'vue';
import VueRouter from 'vue-router';
import COMPONENT_HOME from '../components/Home.vue';
import COMPONENT_MAIN from '../components/Main.vue';
import COMPONENT_SUB1 from '../components/Sub1.vue';
import COMPONENT_SUB2 from '../components/Sub2.vue';
import COMPONENT_INFOMATION from '../components/Infomation.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: COMPONENT_HOME
  },
  {
    path: '/main/',
    name: 'main',
    component: COMPONENT_MAIN
  },
  {
    path: '/sub1/',
    name: 'sub1',
    component: COMPONENT_SUB1
  },
  {
    path: '/sub2',
    name: 'sub2',
    component: COMPONENT_SUB2
  },
  {
    path: '/infomation/',
    name: 'infomation',
    component: COMPONENT_INFOMATION
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});
export default router;