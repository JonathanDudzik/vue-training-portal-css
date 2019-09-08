import Vue from 'vue'
import Vuex from 'vuex'

// begin importing components used in the Course

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainMenuOpen: true,
    contents: [
      {name: "section One"},
      {name: "section Two"},
      {name: "section Three"}
    ],
    selectedContent: "ContentThree",

  },
  mutations: {
    toggleMenu (state) {
      state.mainMenuOpen = !state.mainMenuOpen;
    }
    // Alternatively: toggleMenu: state => !mainMenuOpen
  }
})
