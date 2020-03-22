import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: []
  },
  getters: {
    getUserlist: state => {
      return state.users;
    },
    getUser: state => id => {
      return state.users.find(user => user.id === id);
    }
  },
  mutations: {
    ADD_USER(state, payload) {
      let user = {};
      user.id = payload.id;
      user.timestamp = payload.timestamp;
      state.users.push(user);
    },
    REMOVE_USER(state, payload) {
      let index = state.users.findIndex(user => user.id === payload.id);
      console.log("index: " + index);
      state.users.splice(index, 1);
    }
  },
  actions: {
    addUser: (context, payload) => {
      context.commit("ADD_USER", payload);
    },
    removeUser: (context, payload) => {
      context.commit("REMOVE_USER", payload);
    }
  }
});
