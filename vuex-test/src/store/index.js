import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import modal from './modules/modal';
import editModal from './modules/EditModal';

Vue.use(Vuex);
export default new Vuex.Store({
  namespaced: true, 
  state: {
    taskTyps: 'home',
    version: '0.5.1',
    nextId: 0,
    navs: [],
    tasks: [],
    allTasks: [],
  },
  getters: {
    isTask: store => {
      return !!(store.tasks.length);
    },
    allTask: store => {
      return store.tasks.length;
    },
    completeTask: store => {
      return store.tasks.filter(item => {
        return item.is_do;
      }).length;
    },
    notCompleteTask: store => {
      return store.tasks.filter(item => {
        return !item.is_do;
      }).length;
    },
  },
  modules: {
    modal,
    editModal,
  },
  actions,
  mutations,
});