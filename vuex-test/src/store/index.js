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
    navs: [],
    items: [],
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
    getStateData(context, payload) {
      axios.get(uri)
      .then(res => {
        Vue.set(context.state, 'navs', res.data[0].navs)
        Vue.set(context.state, 'items', res.data[0].items)
        context.commit('getStateData');
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
    getStateData(state, payload) {
      console.log(state.navs);
      console.log(state.items);
    },
  },
});