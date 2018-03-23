import Vue from 'vue';
import Vuex from 'vuex';
import modal from './modules/modal';
Vue.use(Vuex);
export default new Vuex.Store({
  namespaced: true, 
  state: {
    counter: 4,
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
    ],
  },
  getters: {
    isTask: store => {
      return !!(store.items.length);
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
          id: context.state.counter,
          title: payload,
          is_do: false,
        };
        context.state.counter++;
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