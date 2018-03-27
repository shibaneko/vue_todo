import Vue from 'vue';
import axios from 'axios';
const api = './dist/public/json/items.json';

const actions = {
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
    axios.get(api)
    .then(res => {
      context.commit('getStateData', Object.assign(res, payload));
    });
  },
};
export default actions;