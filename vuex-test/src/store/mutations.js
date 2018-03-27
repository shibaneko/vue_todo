import Vue from 'vue';

const mutations = {
  addTask(state, payload) {
    if(payload !== null) {
      state[payload.name].push(payload.data);
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
  getStateData(state, payload) {
    if(payload.name === 'navs'){
      Vue.set(state, payload.name, payload.data[0][payload.name]);
    }else if(payload.name === 'homeTasks'){
      Vue.set(state, 'homeTasks', payload.data[0].homeTasks);
    }else if(payload.name === 'mainTasks'){
      Vue.set(state, 'mainTasks', payload.data[0].mainTasks);
    }else if(payload.name === 'sub1Tasks'){
      Vue.set(state, 'sub1Tasks', payload.data[0].sub1Tasks);
    }else if(payload.name === 'sub2Tasks'){
      Vue.set(state, 'sub2Tasks', payload.data[0].sub2Tasks);
    }else if(payload.name === 'infomationTasks'){
      Vue.set(state, 'infomationTasks', payload.data[0].infomationTasks);
    }
  },
};

export default mutations;
