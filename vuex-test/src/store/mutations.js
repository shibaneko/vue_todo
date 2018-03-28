import Vue from 'vue';

const mutations = {
  addTask(state, payload) {
    if(payload !== null) {
      state.tasks.push(payload.data);
        state.addText = payload.data.title;
      if(!state.modal.showFlag) {
        state.modal.showFlag = true;
        state.modal.modalType = 1;
        let title = payload.data.title;
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
  getNavsData(state, payload) {
    Vue.set(state, 'navs', payload);
  },
  getAllTasksData(state, payload) {
    console.log("ALL"+payload.taskData);
    Vue.set(state, 'nextId', state.nextId);
    Vue.set(state, 'allTasks', payload.taskData);
  },
  getTasksData(state, payload) {
    console.log('filter')
    const tas = state.allTasks.filter((task) => {
      return (task.type === payload.type);
    });
    Vue.set(state, 'tasks', tas);
  },
};
export default mutations;
