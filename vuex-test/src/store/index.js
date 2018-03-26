import Vue from 'vue';
import Vuex from 'vuex';
import modal from './modules/modal';
import editModal from './modules/editModal';

import axios from 'axios';
const uri = './dist/public/json/items.json';

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
    //   {
    //     id: 1,
    //     is_do: false,
    //     title: 'タスク１'
    //   },
    //   {
    //     id: 2,
    //     is_do: true,
    //     title: 'タスク２'
    //   },
    //   {
    //     id: 3,
    //     is_do: false,
    //     title: 'タスク３'
    //   },
    //   {
    //     id: 4,
    //     is_do: true,
    //     title: 'タスク４'
    //   },
    //   {
    //     id: 5,
    //     is_do: false,
    //     title: 'タスク５'
    //   },
    //   {
    //     id: 6,
    //     is_do: true,
    //     title: 'タスク６'
    //   },
    //   {
    //     id: 7,
    //     is_do: false,
    //     title: 'タスク７'
    //   },
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
    editModal,
  },
  actions: {
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
    editTask(context, payload) {
      context.commit('editTask', payload);
    },
    doneTask(context, payload) {
      context.commit('doneTask', payload);
    },
    deleteTask(context, payload) {
      context.commit('deleteTask', payload);
    },
    getTaskData(context, payload) {
      axios.get(uri)
      .then(res => {
        context.commit('getTaskData', Vue.set(context.state, 'items', res.data[0].items));
      });
    },
  },
  mutations: {
    addTask(state, payload) {
      if(payload !== null) {
        state.items.push(payload);
          state.addText = payload.title;
        if(!state.modal.showFlag) {
          state.modal.showFlag = true;
          state.modal.modalType = 1;
          let title = payload.title;
          if(title.length > 20) {
            title = title.slice(-(title.length - 20)) + "...";
          }
          state.modal.modalTitle = title;
        }
      }
    },
    editTask(state, payload) {
      state.editModal.showFlag = true;
      state.editModal.editId = payload.id;
      state.editModal.taskName = payload.title;
    },
    doneTask(state, payload) {
      let index = state.items.indexOf(payload);
      state.items[index].is_do = !payload.is_do;
    },
    deleteTask(state, payload) {
      let index = state.items.indexOf(payload);
      state.items.splice(index, 1);
    },
    getTaskData(state, payload) {
      console.log(state);
    },
  },
});