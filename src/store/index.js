import { createStore } from 'vuex';

export default createStore({
  modules: {
    forms: {
      state: {
        formsList: [], // Массив форм
      },
      mutations: {
        addForm(state, form) {
          state.formsList.push(form);
        },
      },
    },
  },
});