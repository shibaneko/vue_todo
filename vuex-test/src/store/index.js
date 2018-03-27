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
    version: '0.5.1',
    navs: [],
    items: [
      {
        type:homeTasks,
        item: [
          
        ]
      },
      mainTasks: [],
      sub1Tasks: [],
      sub2Tasks: [],
      infomationTasks: [],
    ]
  },
  getters: {
    isHomeTask: store => {
      return !!(store.homeTasks.length);
    },
    allHomeTask: store => {
      return store.items.length;
    },
    completeHomeTask: store => {
      return store.homeTasks.filter(item => {
        return item.is_do;
      }).length;
    },
    notCompleteHomeTask: store => {
      return store.homeTasks.filter(item => {
        return !item.is_do;
      }).length;
    },
    isMainTask: store => {
      return !!(store.mainTasks.length);
    },
    allMainTask: store => {
      return store.mainTasks.length;
    },
    completeMainTask: store => {
      return store.mainTasks.filter(item => {
        return item.is_do;
      }).length;
    },
    notCompleteMainTask: store => {
      return store.mainTasks.filter(item => {
        return !item.is_do;
      }).length;
    },
    isSub1Task: store => {
      return !!(store.sub1Tasks.length);
    },
    allSub1Task: store => {
      return store.sub1Tasks.length;
    },
    completeSub1Task: store => {
      return store.sub1Tasks.filter(item => {
        return item.is_do;
      }).length;
    },
    notCompleteSub1Task: store => {
      return store.sub1Tasks.filter(item => {
        return !item.is_do;
      }).length;
    },
    isSub2Task: store => {
      return !!(store.sub2zTasks.length);
    },
    allSub2Task: store => {
      return store.sub2Tasks.length;
    },
    completeSub2Task: store => {
      return store.sub2Tasks.filter(item => {
        return item.is_do;
      }).length;
    },
    notCompleteSub2Task: store => {
      return store.sub2Tasks.filter(item => {
        return !item.is_do;
      }).length;
    },
    isInfomationTask: store => {
      return !!(store.infomationTasks.length);
    },
    allInfomationTask: store => {
      return store.infomationTasks.length;
    },
    completeInfomationTask: store => {
      return store.infomationTasks.filter(item => {
        return item.is_do;
      }).length;
    },
    notCompleteInfomationTask: store => {
      return store.infomationTasks.filter(item => {
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