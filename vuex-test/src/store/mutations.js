import Vue from 'vue';

const mutations = {
  addTask(state, payload) {
    if(payload !== null) {

      if(payload.newData.type === payload.nowType) {
        state.tasks.push(payload.newData);
      } else {
        state.allTasks.push(payload.newData);
      }

      state.addText = payload.newData.title;
      if(!state.modal.showFlag) {
        state.modal.showFlag = true;
        state.modal.modalType = 1;
        let title = payload.newData.title;
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
    payload.taskData.map(item => {
      Object.assign(item, {controlFlag: true});
    });
    Vue.set(state, 'nextId', payload.hasId);
    Vue.set(state, 'allTasks', payload.taskData);
  },
  getTasksData(state, payload) {
    const tas = state.allTasks.filter((task) => {
      return (task.type === payload);
    });
    Vue.set(state, 'tasks', tas);
  },
  applyTaskData(state, payload) {
    
    state.allTasks.forEach((item, index, array) => {
      if(item.type === payload) {
        array[index].controlFlag = false;
      }
    });
    
    state.tasks.forEach((item, index, array) => {
      array[index].controlFlag = false;
    });

    state.allTasks.forEach((aItem, aIndex, aArray) => {
      state.tasks.forEach((item, index, array) => {
        if(aItem.id === item.id) {
          aArray[aIndex] = array[index];
          aArray[aIndex].controlFlag = true;
          array[index].controlFlag = true;
        }
      });  
    });

    state.allTasks.some((item, index, array) => {
      if(!item.controlFlag) {
        array.splice(index, 1);
      }
    });

    state.tasks.forEach((item, index, array) => {
      if(!item.controlFlag) {
        array[index].controlFlag = true;
        state.allTasks.push(item);
      }
    });
  },
};
export default mutations;
