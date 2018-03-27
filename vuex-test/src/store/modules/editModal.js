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
      context.commit('showEditModal', payload);
    },
    hideEditModal(context, payload) {
      context.commit('hideEditModal');
    },
    setTaskName(context, payload) {
      context.rootState.items.forEach(function(item, index, array) {
        if (context.state.editId === item.id) {
          array[index].title = payload;
        }
      });
      context.state.taskName = payload;
    },
    deleteTask(context, payload) {
      context.rootState.items.forEach(function(item, index, array) {
        if (context.state.editId === item.id) {
          array.splice(index, 1);
        }
      });
      context.state.taskName = payload;
      context.commit('hideEditModal');
    },
    setTaskDo(context, payload) {
      context.rootState.items.forEach(function(item, index, array) {
        if (context.state.editId === item.id) {
          array[index].is_do = payload;
        }
      });
      context.state.is_do = payload;
    },
  },
  mutations: {
    showEditModal(state, payload) {
      state.taskName = payload.title;
      state.editId = payload.id;
      state.showEditFlag = true;
      state.is_do = payload.is_do;
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