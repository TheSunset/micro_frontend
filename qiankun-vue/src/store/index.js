import { createStore } from 'vuex';
import count from './count';

export default createStore({
  state: {
    name: "eric"
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    count,
  },
});
