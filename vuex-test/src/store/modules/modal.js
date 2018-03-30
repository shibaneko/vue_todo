const modal = {
  namespaced: true,
  state: {
    modalTitle: "",
    showFlag: false,
  },
  actions: {
    showModal(context, payload) {
      context.commit('showModal', payload);
    },
    hideModal(context, payload) {
      context.commit('hideModal', payload);
    },
  },
  mutations: {
    showModal(state, payload) {
      state.modalTitle = payload.title;
      state.showFlag = true;
    },
    hideModal(state, payload) {
      state.modalTitle = "";
      state.showFlag = false;
    },
  },
};
export default modal;