import Vue from "vue";
import Vuex from "vuex";
// 1 创建仓库
Vue.use(Vuex);
const store = new Vuex.Store({
  //数据
  state: {
    arr: []
  },

  getters: {
    getCityfoot(state) {
      return state.arr;
    }
  },
  mutations: {
    setFoot(state, name) {
      state.arr = name;
    }
  },
  actions: {
    setfootlist({ commit, state }, name) {
      commit("setFoot", name);
    }
  }
});
export default store;
