import Vue from 'vue';
import Vuex from 'vuex';
import modal from './modules/modal';
Vue.use(Vuex);
export default new Vuex.Store({
  namespaced: true, 
  state: {
    version: '0.0.1',
    navs: [
      {
        id: 1,
        text: 'HOME',
        img: './logo.png'
      },
      {
        id: 2,
        text: 'MAIN',
        img: './logo.png'
      },
      {
        id: 3,
        text: 'SUB1',
        img: './logo.png'
      },
      {
        id: 4,
        text: 'SUB2',
        img: './logo.png'
      },
      {
        id: 5,
        text: 'INFOMATION',
        img: './logo.png'
      }
    ],
    items: [
      {
        id: 1,
        is_do: false,
        title: 'タスク１'
      },
      {
        id: 2,
        is_do: true,
        title: 'タスク２'
      },
      {
        id: 3,
        is_do: false,
        title: 'タスク３'
      },
      {
        id: 4,
        is_do: true,
        title: 'タスク４'
      },
      {
        id: 5,
        is_do: false,
        title: 'タスク５'
      },
      {
        id: 6,
        is_do: true,
        title: 'タスク６'
      },
      {
        id: 7,
        is_do: false,
        title: 'タスク７'
      },
    ],
  },
  getters: {
    isTask: store => {
      return !!(store.items.length);
    },
    allTask: store => {
      return store.items.length;
    },
    completeTask: store => {
      return store.items.filter(item => {
        return item.is_do;
      }).length;
    },
    notCompleteTask: store => {
      return store.items.filter(item => {
        return !item.is_do;
      }).length;
    },
  },
  modules: {
    modal,
  },
  actions: {
    resetISuccess(context, payload) {
      api.resetISuccess()
        .then((data) => {})
        .catch((err) => {});
      context.commit('resetISuccess');
    },
    addTask(context, payload) {
      let newItem = null;
      if(payload !== ""){
        newItem = {
          title: payload,
          is_do: false,
        };
      }
      context.commit('addTask', newItem);
    },
    doneTask(context, payload) {
      context.commit('doneTask', payload);
    },
    deleteTask(context, payload) {
      context.commit('deleteTask', payload);
    },
  },
  mutations: {
    resetISuccess(state, payload) {
        state.isSuccess = false;
    },
    addTask(state, payload) {
      if(payload !== null) {
        state.items.push(payload);
          state.addText = payload.title;
        if(!state.modal.showFlag) {
          state.modal.showFlag = true;
          state.modal.modalTitle = payload.title;
        }
      }
    },
    doneTask(state, payload) {
      let index = state.items.indexOf(payload);
      state.items[index].is_do = !payload.is_do;
    },
    deleteTask(state, payload) {
      let index = state.items.indexOf(payload);
      console.log(index);
      state.items.splice(index, 1);
    },
  },
});