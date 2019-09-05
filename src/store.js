import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainMenuOpen: true
  },
  mutations: {
    toggleMenu (state) {
      state.mainMenuOpen = !state.mainMenuOpen;
    }
    // toggleMenu: state => !mainMenuOpen
  }
})
