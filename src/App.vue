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

export default {
  name: 'App',
  router
};
</script>
<style>
body {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
