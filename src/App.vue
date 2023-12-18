<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-link to="/list-form"></router-link>
    <router-link to="/register-field"></router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import ListForm from './components/ListForm.vue';
import LoginPage from './components/LoginPage.vue';
import RegisterField from './components/RegisterField.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LoginPage
  },
  {
    path: '/list-form',
    name: 'ListForm',
    component: ListForm
  },
  {
    path: '/register-field',
    name: 'RegisterField',
    component: RegisterField
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const store = createStore({
  state() {
    return {
      // Здесь определите состояния Vuex
    };
  },
  mutations: {
    // Здесь определите мутации Vuex
  },
  actions: {
    // Здесь определите действия Vuex
  },
  getters: {
    // Здесь определите геттеры Vuex
  }
});

export default {
  name: 'App',
  router,
  store
};
</script>
<style>
body {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
