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
  getNavsData(context, payload) {
    axios.get(api)
    .then(res => {
      context.commit('getNavsData', res.data[0].navs);
    });
  },
  async getAllTasksData(context, payload) {
    const res = await axios.get(api);
    console.log('axios')
    let hasId = 0;
    res.data[0].tasks.forEach(item => {
      hasId = (item.id > hasId) ? item.id : hasId;
    });
    context.commit('getAllTasksData', {
      taskData: res.data[0].tasks,
      hasId: hasId
    });
  },
  getTasksData(context, payload) {
    context.commit('getTasksData', payload);
  },
};
export default actions;