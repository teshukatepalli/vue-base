import Vue from 'vue'
import Vuex from 'vuex'

// import user from './modules/user';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // user,
  },
  // https://vuex.vuejs.org/guide/strict.html
//   strict: process.env.NODE_ENV !== 'production'
})