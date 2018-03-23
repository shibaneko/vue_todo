const modal = {
  namespaced: true,
  state: {
    modalTitle: "",
    showFlag: false
  },
  actions: {
    showModal(context, payload) {
      context.commit('showModal', modalData);
    },
    hideModal(context, payload) {
      context.commit('hideModal');
    },
  },
  mutations: {
    showModal(state, payload) {
      state.modalTitle = payload.modalData;
      state.showFlag = true;
    },
    hideModal(state, payload) {
      state.modalTitle = "";
      state.showFlag = false;
    },
  },
};
export default modal;