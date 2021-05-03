import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    SET_USER(state, { user, token }) {
      state.user = user;
      state.token = token;
    },
  },
  actions: {},
  modules: {},
});
