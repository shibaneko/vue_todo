const editModal = {
  namespaced: true,
  state: {
    taskName: "",
    editId: -1,
    is_do: false,
    showEditFlag: false,
  },
  actions: {
    showEditModal(context, payload) {
      const targetTask = context.rootState.tasks.filter(item => {
        return (item.id === payload);
      });
      context.commit('showEditModal', targetTask[0]);
    },
    hideEditModal(context, payload) {
      context.commit('hideEditModal');
    },
    setTaskName(context, payload) {
      context.rootState.tasks.forEach(function(item, index, array) {
        if (context.state.editId === item.id) {
          array[index].title = payload;
        }
      });
      context.state.taskName = payload;
    },
    deleteTask(context, payload) {
      context.rootState.tasks.forEach(function(item, index, array) {
        if (context.state.editId === item.id) {
          array.splice(index, 1);
        }
      });
      context.state.taskName = payload;
      context.commit('hideEditModal');
    },
    setTaskDo(context, payload) {
      context.rootState.tasks.forEach(function(item, index, array) {
        if (context.state.editId === item.id) {
          array[index].is_do = payload;
        }
      });
      context.state.is_do = payload;
    },
  },
  mutations: {
    showEditModal(state, payload) {
      console.log(payload);
      state.taskName = payload.title;
      state.showEditFlag = true;
      state.is_do = payload.is_do;
      state.editId = payload.id;
    },
    hideEditModal(state, payload) {
      state.taskName = "";
      state.editId = -1;
      state.is_do = false;
      state.showEditFlag = false;
    },
  },
};
export default editModal;