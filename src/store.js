import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainMenuOpen: false
  },
  mutations: {
    toggleMenu (state) {
      state.mainMenuOpen = !state.mainMenuOpen;
    }
    // Alternatively: toggleMenu: state => !mainMenuOpen
  }
})
