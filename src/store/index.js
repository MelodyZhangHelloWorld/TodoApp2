import Vue from "vue";
import Vuex from "vuex";

import todoList from "./modules/todoList"; //***


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    todoList
  }
});
