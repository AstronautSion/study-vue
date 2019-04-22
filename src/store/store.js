import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

Vue.use(Vuex);

//Todo.vue
export const store = new Vuex.Store({
  modules: {
    todoApp
  }
});

