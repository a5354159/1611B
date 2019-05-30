import Vue from "vue";
import Vuex from "vuex";
// 1 创建仓库
Vue.use(Vuex);
const store = new Vuex.Store({
  //数据
  state: {
    num: 0,
    sum: 10
  },
  mutations: {
    sub(state) {
      if (state.num <= 0) {
        return;
      }
      if (state.sum <= 0) {
        return;
      }
      state.num--;
      state.sum - 10;
    },
    add(state) {
      state.num++;
      +10 + state.sum;
      console.log(state.num);
    }
  },
  actions: {
    subaSync(content) {
      setTimeout(() => {
        content.commit("sub");
      }, 1000);
    },
    addaSync(content) {
      setTimeout(() => {
        content.commit("add");
      }, 1000);
    }
  }
});
export default store;
