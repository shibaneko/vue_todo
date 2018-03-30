import Vue from 'vue';
import axios from 'axios';
const api = './dist/public/json/items.json';

const actions = {
  addTask(context, payload) {
    let newItem = null;
    if(payload !== ""){
      console.log(payload.nowType);
      newItem = {
        id: context.state.nextId,
        is_do: false,
        controlFlag: true,
        title: payload.title,
        type: payload.type
      };
    }
    context.commit('addTask', {newData: newItem, nowType: payload.nowType});
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
  getAllTasksData(context, payload) {
    let hasId = 0;
    var taskGetter = function() {
      return new Promise(function(resolve, reject) {
        axios.get(api)
        .then(res => {
          res.data[0].tasks.forEach(item => {
            hasId = (item.id > hasId) ? item.id : hasId;
          });
          hasId++;
          resolve({
            taskData: res.data[0].tasks,
            hasId: hasId
          });
        }).catch(res => {
          reject("取得に失敗しました。");
        });
      });
    }
    taskGetter()
    .then(function(data) { 
      context.commit('getAllTasksData', data);
      context.commit('getTasksData', payload);
    });
  },
  getTasksData(context, payload) {
    context.commit('getTasksData', payload);
  },
  applyTaskData(context, payload) {
    context.commit('applyTaskData', payload);
  },
};
export default actions;