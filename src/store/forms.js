export default {
  namespaced: true,
  state: {
    forms: [],
  },
  mutations: {
    addForm(state, formData) {
      state.forms.push(formData);
    },
    removeForm(state, index) {
      state.forms.splice(index, 1);
    },
  },
  actions: {
    saveForm({ commit, state }, formData) {
      if (!isFormValid(formData)) {
        // Проверка, если форма недействительна
        return;
      }
      commit('addForm', formData);
    },
    deleteForm({ commit, state }, index) {
      commit('removeForm', index);
    },
  },
  getters: {
    getForms(state) {
      return state.forms;
    },
  },
};