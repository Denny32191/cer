import { createStore } from 'vuex';

const store = createStore({
  state: {
    fields: [],
  },
  mutations: {
    addField(state, field) {
      state.fields.push(field);
    },
    removeField(state, index) {
      state.fields.splice(index, 1);
    },
    saveForm(state, formData) {
      // Сохранение значений полей в хранилище
      state.fields = formData.fields;
    },
  },
  actions: {
    addField({ commit }) {
      const field1 = {
        surname: "",
        contact: "",
        required: false,
      };
      const field2 = {
        surname: "",
        contact: "",
        required: false,
      };
      commit('addField', field1);
      commit('addField', field2);
    },
    removeField({ commit }, index) {
      commit('removeField', index);
    },
    saveForm({ commit, state }) {
      const formData = {
        title: "Форма регистрации участников",
        author: "Автор :",
        creationDate: "Дата создания :",
        fields: state.fields,
      };
      commit('saveForm', formData);
    },
  },
});

export default store;
  