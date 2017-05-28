import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userid: sessionStorage.getItem('userid') || '',
    token: sessionStorage.getItem('token') || '',
    title: "",
    language: 'zh',
  },
  mutations: {
    login(state, info) {
      sessionStorage.setItem('token', info.token);
      sessionStorage.setItem('userid', info.userid);
      state.token = info.token;
      state.userid = info.userid;
    },
    logout(state) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('userid');
      state.token = null;
      state.userid = null;
    },
    langEn(state) {
      state.language = 'en';
    },
    langZh(state) {
      state.language = 'zh';
    }
  }
})
